const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const brainDir = 'C:/Users/LongVi/.gemini/antigravity-ide/brain/735cffbd-1e37-459a-9d2f-a0c1eafb96b3';
const publicImages = path.join(baseDir, 'public', 'images');

function copy(src, dest) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Source not found: ${src}`);
  }
}

// 1. Hero
copy(path.join(baseDir, 'img/Conrad/IMG_7032.JPG'), path.join(publicImages, 'hero/portrait.png'));
copy(path.join(baseDir, 'img/Conrad/IMG_7032.JPG'), path.join(publicImages, 'hero/portrait.jpg'));

// 2. Marquee
copy(path.join(baseDir, 'img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG'), path.join(publicImages, 'marquee/gart/ftc-national.jpg'));
copy(path.join(baseDir, 'img/FTC quoc te/1.jpg'), path.join(publicImages, 'marquee/gart/ftc-worlds.jpg'));
copy(path.join(baseDir, 'img/FTC Thanh Hoa/IMG_6824.JPG'), path.join(publicImages, 'marquee/gart/thanh-hoa-scrimmage.jpg'));
copy(path.join(baseDir, 'img/Gart/File_000.png'), path.join(publicImages, 'marquee/gart/gart-cad.png'));
copy(path.join(baseDir, 'img/Gart expo 2025/1JQ6RU3Q4_5FNL7B.JPG'), path.join(publicImages, 'marquee/gart/gart-expo.jpg'));
copy(path.join(baseDir, 'img/Gart Camp 2025/IMG_6975.JPG'), path.join(publicImages, 'marquee/gart/gart-camp.jpg'));

copy(path.join(baseDir, 'img/Wico/Wico/File_000(4).png'), path.join(publicImages, 'marquee/envirotrack/envirotrack-booth.png'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000(8).png'), path.join(publicImages, 'marquee/envirotrack/envirotrack-device.png'));
copy(path.join(baseDir, 'img/Wico/GYS/IMG_6940.JPG'), path.join(publicImages, 'marquee/envirotrack/envirotrack-present.jpg'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000.png'), path.join(publicImages, 'marquee/envirotrack/envirotrack-team.png'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000(6).png'), path.join(publicImages, 'marquee/envirotrack/envirotrack-member.png'));

copy(path.join(baseDir, 'img/Conrad/File_000.png'), path.join(publicImages, 'marquee/conrad/conrad-summit.png'));
copy(path.join(baseDir, 'img/Conrad/IMG_7031.JPG'), path.join(publicImages, 'marquee/conrad/conrad-auv-prototype.jpg'));
copy(path.join(baseDir, 'img/Conrad/IMG_7034.JPG'), path.join(publicImages, 'marquee/conrad/conrad-electronics.jpg'));
copy(path.join(baseDir, 'img/Conrad/IMG_7020.JPG'), path.join(publicImages, 'marquee/conrad/conrad-team-hall.jpg'));
copy(path.join(baseDir, 'img/Conrad/IMG_7010.JPG'), path.join(publicImages, 'marquee/conrad/conrad-display.jpg'));

// 3. About Icons
copy(path.join(brainDir, 'gear_icon_1790529042742.jpg'), path.join(publicImages, 'about/gear-icon.png'));
copy(path.join(brainDir, 'circuit_icon_1790529105232.jpg'), path.join(publicImages, 'about/circuit-icon.png'));
copy(path.join(brainDir, 'plane_icon_1790529206212.jpg'), path.join(publicImages, 'about/plane-icon.png'));
copy(path.join(brainDir, 'music_icon_1790529269704.jpg'), path.join(publicImages, 'about/music-icon.png'));

// 4. Journey
copy(path.join(baseDir, 'img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG'), path.join(publicImages, 'journey/gart/banner.jpg'));
copy(path.join(baseDir, 'img/FTC quoc te/1.jpg'), path.join(publicImages, 'journey/gart/worlds.jpg'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000(8).png'), path.join(publicImages, 'journey/envirotrack/sensor.png'));
copy(path.join(baseDir, 'img/Conrad/IMG_7031.JPG'), path.join(publicImages, 'journey/conrad/auv.jpg'));
copy(path.join(baseDir, 'img/Ảnh thực tập/Tri Nam/1JSJ401LT_5836GL.JPG'), path.join(publicImages, 'journey/samsung/code.jpg'));
copy(path.join(baseDir, 'img/Ảnh thực tập/Tri Nam/1JSJ40211_5836GL.JPG'), path.join(publicImages, 'journey/ins/grid.jpg'));
copy(path.join(baseDir, 'img/Hoithao_HCM/IMG_6790.JPG'), path.join(publicImages, 'journey/research/gtsd.jpg'));
copy(path.join(baseDir, 'img/Stembridge/Trường Xã Đàn/IMG_7074.jpg'), path.join(publicImages, 'journey/stembridge/xadan.jpg'));
copy(path.join(baseDir, 'img/Stembridge/20260203_154406_1.jpg'), path.join(publicImages, 'journey/volunteer/quanson.jpg'));

// 5. Projects (exact paths requested in prompt)
copy(path.join(baseDir, 'img/Gart/File_000.png'), path.join(publicImages, 'projects/gart/robot-01.jpg'));
copy(path.join(baseDir, 'img/FTC Thanh Hoa/IMG_6824.JPG'), path.join(publicImages, 'projects/gart/thanh-hoa-scrimmage.jpg'));
copy(path.join(baseDir, 'img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG'), path.join(publicImages, 'projects/gart/national-champion.jpg'));

copy(path.join(baseDir, 'img/Wico/Wico/File_000(8).png'), path.join(publicImages, 'projects/envirotrack/device-01.jpg'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000(4).png'), path.join(publicImages, 'projects/envirotrack/poster.jpg'));
copy(path.join(baseDir, 'img/Wico/GYS/IMG_6940.JPG'), path.join(publicImages, 'projects/envirotrack/deployment.jpg'));

copy(path.join(baseDir, 'img/Conrad/File_000.png'), path.join(publicImages, 'projects/conrad/cad-design.jpg'));
copy(path.join(baseDir, 'img/Conrad/IMG_7034.JPG'), path.join(publicImages, 'projects/conrad/electricals.jpg'));
copy(path.join(baseDir, 'img/Conrad/IMG_7031.JPG'), path.join(publicImages, 'projects/conrad/prototype.jpg'));

// 6. Achievements
copy(path.join(baseDir, 'img/Hoithao_HCM/IMG_6790.JPG'), path.join(publicImages, 'achievements/gtsd-2024.jpg'));
copy(path.join(baseDir, 'img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG'), path.join(publicImages, 'achievements/ftc-national-champion.jpg'));
copy(path.join(baseDir, 'img/Conrad/File_000.png'), path.join(publicImages, 'achievements/conrad-summit-finalist.png'));
copy(path.join(baseDir, 'img/Wico/Wico/File_000.png'), path.join(publicImages, 'achievements/wico-gold-award.png'));
copy(path.join(baseDir, 'img/FTC quoc te/1.jpg'), path.join(publicImages, 'achievements/ftc-world-championship.jpg'));
copy(path.join(baseDir, 'img/Gart/File_000.png'), path.join(publicImages, 'achievements/gart-design-award.png'));

// 7. Personal
copy(path.join(baseDir, 'img/buồng lái/1K1MLIA18_5836GL.jpg'), path.join(publicImages, 'personal/aviation/cockpit-build.jpg'));
copy(path.join(baseDir, 'img/buồng lái/1K1MLI9TI_5836GL.jpg'), path.join(publicImages, 'personal/aviation/cockpit-schematic.jpg'));
copy(path.join(baseDir, 'img/ảnh hồi bé/IMG_3622.jpg'), path.join(publicImages, 'personal/aviation/childhood-plane.jpg'));
copy(path.join(brainDir, 'guitar_performance_1790529334700.jpg'), path.join(publicImages, 'personal/music/electric-guitar.jpg'));

console.log('Finished copying all assets!');
