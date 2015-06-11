/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'BodyHigh2',
                type: 'image',
                rect: ['99px', '10px','505px','942px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Body%40High2.png",'0px','0px']
            },
            {
                id: 'HandHigh2',
                type: 'image',
                rect: ['22px', '30px','144px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Hand%40High2.png",'0px','0px'],
                transform: [[],['8']]
            },
            {
                id: 'ArmHigh2',
                type: 'image',
                rect: ['92px', '122px','183px','215px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arm%40High2.png",'0px','0px']
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['237px', '89px','192','300','auto', 'auto'],
                c: [
                {
                    id: 'GirlHeadHigh',
                    type: 'image',
                    rect: ['0px', '0px','192px','300px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"GirlHead@High2.png",'0px','0px']
                },
                {
                    id: 'GirlClosedEyesHigh',
                    type: 'image',
                    rect: ['53px', '105px','74px','5px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"GirlClosedEyes@High2.png",'0px','0px']
                },
                {
                    id: 'GirlOpenEyes',
                    display: 'block',
                    type: 'image',
                    rect: ['49px', '101px','83px','12px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"GirlOpenEyes2.png",'0px','0px']
                }]
            },
            {
                id: 'GirlBodyHigh',
                type: 'image',
                rect: ['468px', '308px','451px','628px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"GirlBody@High2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_GirlOpenEyes}": [
                ["style", "top", '101px'],
                ["style", "left", '49px'],
                ["style", "display", 'block']
            ],
            "${_ArmHigh2}": [
                ["style", "top", '110px'],
                ["transform", "rotateZ", '4deg'],
                ["style", "height", '215px'],
                ["style", "left", '86px'],
                ["style", "width", '183px']
            ],
            "${_Group}": [
                ["style", "top", '93px'],
                ["style", "left", '601px'],
                ["transform", "rotateZ", '3deg']
            ],
            "${_GirlBodyHigh}": [
                ["style", "height", '628px'],
                ["style", "top", '308px'],
                ["style", "left", '468px'],
                ["style", "width", '451px']
            ],
            "${_HandHigh2}": [
                ["style", "top", '21px'],
                ["transform", "rotateZ", '16deg'],
                ["style", "height", '110px'],
                ["style", "left", '45px'],
                ["style", "width", '96px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '964px'],
                ["style", "height", '969px'],
                ["style", "overflow", 'hidden']
            ],
            "${_GirlHeadHigh}": [
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '192px']
            ],
            "${_BodyHigh2}": [
                ["style", "top", '10px'],
                ["style", "height", '942px'],
                ["style", "left", '99px'],
                ["style", "width", '505px']
            ],
            "${_GirlClosedEyesHigh}": [
                ["style", "height", '5px'],
                ["style", "top", '105px'],
                ["style", "left", '53px'],
                ["style", "width", '74px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2967,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_HandHigh2}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Group}", "left", '601px', { fromValue: '601px'}], position: 2967, duration: 0 },
                { id: "eid28", tween: [ "transform", "${_ArmHigh2}", "rotateZ", '4deg', { fromValue: '4deg'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "transform", "${_HandHigh2}", "rotateZ", '22deg', { fromValue: '16deg'}], position: 0, duration: 875 },
                { id: "eid12", tween: [ "transform", "${_HandHigh2}", "rotateZ", '-5deg', { fromValue: '22deg'}], position: 875, duration: 875 },
                { id: "eid40", tween: [ "transform", "${_Group}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 335, duration: 933 },
                { id: "eid41", tween: [ "transform", "${_Group}", "rotateZ", '3deg', { fromValue: '-3deg'}], position: 2035, duration: 893 },
                { id: "eid42", tween: [ "transform", "${_Group}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 2967, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Group}", "top", '93px', { fromValue: '93px'}], position: 2967, duration: 0 },
                { id: "eid33", tween: [ "style", "${_HandHigh2}", "top", '23px', { fromValue: '21px'}], position: 0, duration: 680 },
                { id: "eid35", tween: [ "style", "${_HandHigh2}", "top", '24px', { fromValue: '23px'}], position: 680, duration: 1070 },
                { id: "eid49", tween: [ "style", "${_Stage}", "width", '900px', { fromValue: '964px'}], position: 0, duration: 335 },
                { id: "eid22", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 1750, duration: 0 },
                { id: "eid43", tween: [ "style", "${_GirlOpenEyes}", "display", 'block', { fromValue: 'block'}], position: 335, duration: 0 },
                { id: "eid44", tween: [ "style", "${_GirlOpenEyes}", "display", 'none', { fromValue: 'block'}], position: 1070, duration: 0 },
                { id: "eid45", tween: [ "style", "${_GirlOpenEyes}", "display", 'block', { fromValue: 'none'}], position: 1268, duration: 0 },
                { id: "eid46", tween: [ "style", "${_GirlOpenEyes}", "display", 'block', { fromValue: 'block'}], position: 2855, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "GuyAndGirl");
