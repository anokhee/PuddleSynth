function Face() {
    this.hsx = 200;
    this.hsy = 0;
    this.hsy2 = 120;
    this.hcpx = 500;
    this.hcpy = 450;

    this.bunx = 10;
    this.buny = 50;
    this.bunSize = 10;

    this.hairStyleLeft = 0;
    this.hairStyleRight = 0;
    // To add: 
    // 1) More hairstyle options -- maybe 4 maximum, to learn about controlling Bezier curves.
    // 2) Eyebrows... cuz duh... that would be SO CUTE.  
    this.hairk = 15;
    this.hairstr = 5;
    this.hairl = 20;
    this.hairln = 0;

    this.espac = 100;
    this.eypos = 100;
    this.ew = 40;
    this.eh = 30;

    this.p = 20;

    this.chSpacing = 0;
    this.chYpos = 60;
    this.ch = 40;

    this.mouthX = 120;
    this.mouthY = 225;
    this.mouthCx = 100;
    this.mouthCy = 280;

    this.noseX = 20;
    this.noseY = 205;
    this.noseCx = 25;
    this.noseCy = 180;
}

function Palette() {
    this.skinColor = `rgba(224, 207, 179, 1)`;
    this.hairColor = `rgba(11, 11, 11, 1)`;
    this.pupilsColor = `rgba(1, 1, 1, 1)`;
    this.eyeColor = `rgba(255, 255, 255, 1)`;
    this.cheeksColor = `rgba(230, 100, 100, 1)`;
    this.backgroundColor = `rgba(255, 255, 255, 1)`;
}