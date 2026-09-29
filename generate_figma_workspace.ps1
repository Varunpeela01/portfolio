Add-Type -AssemblyName System.Drawing

$width = 1600
$height = 860
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background: #121826
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 24, 38))
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# Subtle dot matrix
$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 45, 65))
for ($x = 20; $x -lt $width; $x += 24) {
    for ($y = 20; $y -lt $height; $y += 24) {
        $g.FillRectangle($dotBrush, $x, $y, 1, 1)
    }
}

# Fonts
$fontTitle = New-Object System.Drawing.Font('Consolas', 11, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Consolas', 9, [System.Drawing.FontStyle]::Regular)
$fontFooter = New-Object System.Drawing.Font('Consolas', 9, [System.Drawing.FontStyle]::Regular)

$figmaBlue = [System.Drawing.Color]::FromArgb(13, 153, 255)
$bluePen = New-Object System.Drawing.Pen($figmaBlue, 1.5)
$bluePenThick = New-Object System.Drawing.Pen($figmaBlue, 2.0)
$blueBrush = New-Object System.Drawing.SolidBrush($figmaBlue)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$textMutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(148, 163, 184))

$cardW = 360
$cardH = 680
$topY = 90

# Load images
$img1 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/byodh-wireframe-1.jpg').Path)
$img2 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/byodh-wireframe-2.jpg').Path)

function DrawSelectionHandle($gfx, $hx, $hy) {
    $handleSize = 6
    $rect = New-Object System.Drawing.Rectangle(($hx - $handleSize/2), ($hy - $handleSize/2), $handleSize, $handleSize)
    $gfx.FillRectangle([System.Drawing.Brushes]::White, $rect)
    $gfx.DrawRectangle((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(13, 153, 255), 1.5)), $rect)
}

# --- SCREEN 1: Discovery ---
$x1 = 180
$g.DrawString("01 . Real Estate Discovery", $fontTitle, $textMutedBrush, $x1, ($topY - 30))
$g.DrawString("390 x 844", $fontSub, $textMutedBrush, ($x1 + $cardW - 75), ($topY - 28))
$rect1 = New-Object System.Drawing.Rectangle($x1, $topY, $cardW, $cardH)
$g.FillRectangle([System.Drawing.Brushes]::White, $rect1)
$g.DrawImage($img1, $x1, $topY, $cardW, $cardH)
$g.DrawRectangle($bluePen, $rect1)
DrawSelectionHandle $g $x1 $topY
DrawSelectionHandle $g ($x1 + $cardW) $topY
DrawSelectionHandle $g $x1 ($topY + $cardH)
DrawSelectionHandle $g ($x1 + $cardW) ($topY + $cardH)

# --- SCREEN 2: Catalog (Active) ---
$x2 = 620
$g.DrawString("02 . Materials Catalog", $fontTitle, $blueBrush, $x2, ($topY - 30))
$g.DrawString("390 x 844 . Selected", $fontSub, $blueBrush, ($x2 + $cardW - 145), ($topY - 28))
$rect2 = New-Object System.Drawing.Rectangle($x2, $topY, $cardW, $cardH)
$g.FillRectangle([System.Drawing.Brushes]::White, $rect2)
$g.DrawImage($img2, $x2, $topY, $cardW, $cardH)
$g.DrawRectangle($bluePenThick, $rect2)
DrawSelectionHandle $g $x2 $topY
DrawSelectionHandle $g ($x2 + $cardW) $topY
DrawSelectionHandle $g $x2 ($topY + $cardH)
DrawSelectionHandle $g ($x2 + $cardW) ($topY + $cardH)

# --- SCREEN 3: Profile ---
$x3 = 1060
$g.DrawString("03 . Professional Profile", $fontTitle, $textMutedBrush, $x3, ($topY - 30))
$g.DrawString("390 x 844", $fontSub, $textMutedBrush, ($x3 + $cardW - 75), ($topY - 28))
$rect3 = New-Object System.Drawing.Rectangle($x3, $topY, $cardW, $cardH)
$g.FillRectangle([System.Drawing.Brushes]::White, $rect3)

# Draw profile wireframe elements on screen 3
$slateDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 36, 56))
$slateLight = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(226, 232, 240))
$slateMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(203, 213, 225))
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(226, 232, 240), 1)

# Status bar
$g.FillRectangle($slateDark, ($x3 + 20), ($topY + 16), 36, 8)
$g.FillRectangle($slateDark, ($x3 + $cardW - 48), ($topY + 16), 28, 8)

# Back arrow & profile title
$g.FillRectangle($slateDark, ($x3 + 20), ($topY + 44), 22, 16)
$g.FillRectangle($slateDark, ($x3 + 55), ($topY + 46), 140, 14)

# Avatar circle
$avatarRect = New-Object System.Drawing.Rectangle(($x3 + 20), ($topY + 80), 64, 64)
$g.FillEllipse($slateDark, $avatarRect)
$g.FillRectangle($slateDark, ($x3 + 96), ($topY + 90), 160, 16)
$g.FillRectangle($slateMuted, ($x3 + 96), ($topY + 114), 110, 12)
$g.FillRectangle($slateLight, ($x3 + 96), ($topY + 132), 80, 10)

# Credential tags
$g.FillRectangle($slateLight, ($x3 + 20), ($topY + 164), 90, 22)
$g.FillRectangle($slateLight, ($x3 + 118), ($topY + 164), 90, 22)
$g.FillRectangle($slateLight, ($x3 + 216), ($topY + 164), 60, 22)

# Metrics 3-box row
$boxW = 98
for ($b = 0; $b -lt 3; $b++) {
    $bx = $x3 + 20 + ($b * 106)
    $bRect = New-Object System.Drawing.Rectangle($bx, ($topY + 200), $boxW, 56)
    $g.DrawRectangle($borderPen, $bRect)
    $g.FillRectangle($slateLight, ($bx + 14), ($topY + 212), 40, 10)
    $g.FillRectangle($slateDark, ($bx + 14), ($topY + 230), 60, 14)
}

# Portfolio / Project Cards section
$g.FillRectangle($slateDark, ($x3 + 20), ($topY + 276), 120, 14)
$cardRect1 = New-Object System.Drawing.Rectangle(($x3 + 20), ($topY + 300), ($cardW - 40), 120)
$g.DrawRectangle($borderPen, $cardRect1)
$g.DrawLine($borderPen, ($x3 + 20), ($topY + 300), ($x3 + $cardW - 20), ($topY + 420))
$g.DrawLine($borderPen, ($x3 + $cardW - 20), ($topY + 300), ($x3 + 20), ($topY + 420))

$g.FillRectangle($slateDark, ($x3 + 20), ($topY + 432), 180, 12)
$g.FillRectangle($slateMuted, ($x3 + 20), ($topY + 450), 240, 10)

$cardRect2 = New-Object System.Drawing.Rectangle(($x3 + 20), ($topY + 474), ($cardW - 40), 110)
$g.DrawRectangle($borderPen, $cardRect2)
$g.DrawLine($borderPen, ($x3 + 20), ($topY + 474), ($x3 + $cardW - 20), ($topY + 584))
$g.DrawLine($borderPen, ($x3 + $cardW - 20), ($topY + 474), ($x3 + 20), ($topY + 584))

# Sticky bottom action bar
$g.FillRectangle([System.Drawing.Brushes]::White, ($x3 + 1), ($topY + $cardH - 68), ($cardW - 2), 67)
$g.DrawLine($borderPen, ($x3 + 1), ($topY + $cardH - 68), ($x3 + $cardW - 1), ($topY + $cardH - 68))
$btnRect = New-Object System.Drawing.Rectangle(($x3 + 20), ($topY + $cardH - 52), ($cardW - 40), 38)
$g.FillRectangle($slateDark, $btnRect)
$g.FillRectangle($slateLight, ($x3 + 120), ($topY + $cardH - 38), 120, 10)

# Draw Screen 3 selection border
$g.DrawRectangle($bluePen, $rect3)
DrawSelectionHandle $g $x3 $topY
DrawSelectionHandle $g ($x3 + $cardW) $topY
DrawSelectionHandle $g $x3 ($topY + $cardH)
DrawSelectionHandle $g ($x3 + $cardW) ($topY + $cardH)

# Footer text
$footerText = "BYODH Ecosystem . Figma Wireframing Canvas . Sprint 02 . 8pt Grid Hierarchy . Ergonomic Bottom Sheet Anchors"
$g.DrawString($footerText, $fontFooter, $textMutedBrush, 180, ($height - 40))

$bmp.Save('public/projects/image_9f84df.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save('public/image_9f84df.png', [System.Drawing.Imaging.ImageFormat]::Png)

$img1.Dispose()
$img2.Dispose()
$g.Dispose()
$bmp.Dispose()

Write-Output "Successfully generated image_9f84df.png"
