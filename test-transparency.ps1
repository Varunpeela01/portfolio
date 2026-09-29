Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\ganap\.gemini\antigravity\brain\0206ecad-427d-4c5c-9f69-9c15076c6afd\.user_uploaded\media_1790610804673.jpg"
$destPath = "c:\Users\ganap\OneDrive\Desktop\Portfolio\varun-peela---product-designer-and-founder-portfolio\public\projects\refill-health-hero-transparent.png"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $bmp.Width
$height = $bmp.Height

$outBmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Helper function to check if a pixel is checkerboard background:
# Light square: R,G,B around 250-255, saturation very low
# Dark square: R,G,B around 200-215, saturation very low
function IsCheckerboard($c) {
    $diffRG = [Math]::Abs($c.R - $c.G)
    $diffRB = [Math]::Abs($c.R - $c.B)
    $diffGB = [Math]::Abs($c.G - $c.B)
    $maxDiff = [Math]::Max($diffRG, [Math]::Max($diffRB, $diffGB))
    if ($maxDiff -gt 8) { return $false } # not neutral gray/white
    
    # Check if light square (240..255) or dark square (195..225)
    $avg = ($c.R + $c.G + $c.B) / 3.0
    if (($avg -ge 195 -and $avg -le 225) -or ($avg -ge 240 -and $avg -le 255)) {
        return $true
    }
    return $false
}

# Flood fill queue from edges
$visited = New-Object 'bool[,]' $width, $height
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Seed from all 4 borders
for ($x = 0; $x -lt $width; $x++) {
    $cTop = $bmp.GetPixel($x, 0)
    if (IsCheckerboard $cTop) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, 0)))
        $visited[$x, 0] = $true
    }
    $cBot = $bmp.GetPixel($x, $height - 1)
    if (IsCheckerboard $cBot) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, $height - 1)))
        $visited[$x, $height - 1] = $true
    }
}

for ($y = 0; $y -lt $height; $y++) {
    $cLeft = $bmp.GetPixel(0, $y)
    if (IsCheckerboard $cLeft) {
        $queue.Enqueue((New-Object System.Drawing.Point(0, $y)))
        $visited[0, $y] = $true
    }
    $cRight = $bmp.GetPixel($width - 1, $y)
    if (IsCheckerboard $cRight) {
        $queue.Enqueue((New-Object System.Drawing.Point($width - 1, $y)))
        $visited[$width - 1, $y] = $true
    }
}

$dirs = @(
    (New-Object System.Drawing.Point(1, 0)),
    (New-Object System.Drawing.Point(-1, 0)),
    (New-Object System.Drawing.Point(0, 1)),
    (New-Object System.Drawing.Point(0, -1))
)

while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    foreach ($d in $dirs) {
        $nx = $pt.X + $d.X
        $ny = $pt.Y + $d.Y
        if ($nx -ge 0 -and $nx -lt $width -and $ny -ge 0 -and $ny -lt $height) {
            if (-not $visited[$nx, $ny]) {
                $c = $bmp.GetPixel($nx, $ny)
                if (IsCheckerboard $c) {
                    $visited[$nx, $ny] = $true
                    $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
                }
            }
        }
    }
}

# Copy pixels to output
for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        if ($visited[$x, $y]) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $outBmp.SetPixel($x, $y, $bmp.GetPixel($x, $y))
        }
    }
}

$outBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$outBmp.Dispose()
Write-Output "Successfully created transparent PNG: $destPath"
