let foreheadWidthSlider = document.getElementById('forehead-width-slider');
let cheeksWidthSlider = document.getElementById('cheeks-width-slider');
let chinHeightSlider = document.getElementById('chin-height-slider');

let cheeksSpacingSlider = document.getElementById('cheeks-spacing-slider');
let cheeksYPosSlider = document.getElementById('cheeks-ypos-slider');
let cheeksSizeSlider = document.getElementById('cheeks-size-slider');

let bunSpacingSlider = document.getElementById('bun-spacing-slider');
let bunYPosSlider = document.getElementById('bun-ypos-slider');
let bunSizeSlider = document.getElementById('bun-size-slider');

let hairFullnessSlider = document.getElementById('hair-fullness-slider');
let hairLengthSlider = document.getElementById('hair-length-slider');
let hairStrandSlider = document.getElementById('hair-strand-slider');

let eyeSpacingSlider = document.getElementById('eye-spacing-slider');
let eyeYPosSlider = document.getElementById('eye-ypos-slider');
let eyeWidthSlider = document.getElementById('eye-width-slider');
let eyeHeightSlider = document.getElementById('eye-height-slider');
let pupilSizeSlider = document.getElementById('pupil-size-slider');

let noseBaseWidthSlider = document.getElementById('nose-base-width-slider');
let noseYPosSlider = document.getElementById('nose-base-ypos-slider');
let noseWidthSlider = document.getElementById('nose-width-slider');
let noseLengthSlider = document.getElementById('nose-length-slider');

let faceOutlineSlider = document.getElementById('face-outline-slider');

let arr = [
    [face, foreheadWidthSlider, `hsx`],
    [face, cheeksWidthSlider, `hcpx`],
    [face, chinHeightSlider, `hcpy`],
    [face, hairFullnessSlider, 'hairk'],
    [face, hairLengthSlider, 'hairl'],
    [face, hairStrandSlider, 'hairstr'],
    [face, bunSizeSlider, 'bunSize'],
    [face, bunSpacingSlider, 'bunx'],
    [face, bunYPosSlider, 'buny'],
    [face, eyeSpacingSlider, 'espac'],
    [face, eyeYPosSlider, 'eypos'],
    [face, eyeWidthSlider, 'ew'],
    [face, eyeHeightSlider, 'eh'],
    [face, pupilSizeSlider, 'p'],
    [face, noseBaseWidthSlider, 'noseCx'],
    [face, noseYPosSlider, 'noseY'],
    [face, noseWidthSlider, 'noseX'],
    [face, noseLengthSlider, 'noseCy'],
    [face, cheeksSpacingSlider, 'chSpacing'],
    [face, cheeksYPosSlider, 'chYpos'],
    [face, cheeksSizeSlider, 'ch'],
    [palette, faceOutlineSlider, 'strokeWeight']
];


for (var i = 0; i < arr.length; i++) {
    arr[i][1].addEventListener("input", bindInput(i, arr[i]));
}

function bindInput(i) {
    return function () {
        arr[i][0][arr[i][2]] = parseInt(this.value);
    };
}


let skinColorPalette = document.getElementById('skinColorPalette');
let cheeksColorPalette = document.getElementById('cheeksColorPalette');
let eyesColorPalette = document.getElementById('eyesColorPalette');



let skinColors = ['#5C3F0D', '#775925',
    '#8B6422', '#8B6E3D', '#9F7734',
    '#A28452', '#B58F4E', '#B4996B',
    '#CCA96E', '#CCB690', '#E5C99B',
    '#E0CFB3', '#F7E2BF', '#F7EEDF'
]

let cheeksColors = ['#945327', '#BF794A', '#D99669',
    '#CD4922', '#E56039', '#FA7953', '#F5B991'
];

let hairColors = ['#000000', '#5E3832', '#8A3D40', '#969090', '#D3C976', '#F8CD00',
    '#CD4922', '#008DE3', '#93BDC9', '#FF3C44',
    '#00CEB4', '#FF7F3A', '#A8428E', '#FF99AF'
];

let eyeColors = ['#151005', '#36290C', '#097D60',
'#456D6A', '#305ABA', '#0069B9', '#B8B4C6'];

function createColorSwatch(pal, arr, part) {
    part = Object.keys(palette)[part];
    for (i = 0; i < arr.length; i++) {
        let swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        pal.appendChild(swatch);
        swatch.style.backgroundColor = arr[i];

        function bindColor(part) {
            return function () {
                var selectedColors = document.querySelectorAll(".selected-swatch");

                [].forEach.call(selectedColors, function (el) {
                    el.classList.remove("selected-swatch");
                });

                palette[part] = swatch.style.backgroundColor;
                swatch.classList.add('selected-swatch');
            }
        }

        swatch.addEventListener('click', bindColor(part));
    }
}

createColorSwatch(skinColorPalette, skinColors, 0);
createColorSwatch(cheeksColorPalette, cheeksColors, 4);
createColorSwatch(hairColorPalette, hairColors, 1);
createColorSwatch(eyesColorPalette, eyeColors, 2);

let boubaHairSelector = document.getElementById('bouba-hair-selector');
let kikiHairSelector = document.getElementById('kiki-hair-selector');

boubaHairSelector.addEventListener('click', function(){
    face.hairStyle = 0;
    face.hairln = 0;
});


kikiHairSelector.addEventListener('click', function(){
    face.hairStyle = 1;
    face.hairln = -50;
});