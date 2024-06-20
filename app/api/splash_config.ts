import { transform } from "next/dist/build/swc"

export const splash_config = JSON.stringify({
    normal: {
        ratio_list: [
            {
                debug_name: "ipad",
                radio_start: 0,
                radio_end: 1.62,
                children: [
                    {
                        type: "Image",
                        src: "background/normal/bg.png",
                        height: 1278,
                        width: 251,
                        style: {
                            height: 1,
                            top: "0%",
                            position: "absolute",
                            transform: [{ scaleX: 16 }]
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/left_top_light.png",
                        height: 755,
                        width: 720,
                        style: {
                            width: 1,
                            position: "absolute"
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/left_top_sun_light.png",
                        height: 4092,
                        width: 3076,
                        style: {
                            width: 1,
                            position: "absolute"
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/mountain.png",
                        height: 1440,
                        width: 1306,
                        style: {
                            height: 0.35,
                            position: "absolute",
                            bottom: "25%"
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/right_wave.png",
                        height: 2292,
                        width: 1792,
                        style: {
                            height: 0.8,
                            position: "absolute",
                            right: 0,
                            top: "0%"
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/sea_surface.png",
                        height: 1392,
                        width: 5892,
                        style: {
                            height: 0.35,
                            position: "absolute",
                            bottom: 0
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/wave.png",
                        height: 1932,
                        width: 3082,
                        style: {
                            width: 1,
                            position: "absolute",
                            right: 0,
                            bottom: -500
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/title.png",
                        height: 285,
                        width: 557,
                        style: {
                            height: 0.25,
                            position: "absolute",
                            top: "5%",
                            left: "50%",
                            transform: [{ translateX: -278 }]
                        }
                    },
                    {
                        type: "Image",
                        calcObjList: [
                            {
                                key: "src",
                                value: "background/normal/${(Date.now() < 1718985600000) ? 0 : (Date.now() < 1719072000000) ? 2 : 1}day.png"
                            }
                        ],
                        src: "background/normal/0day.png",
                        height: 734,
                        width: 645,
                        style: {
                            height: 0.6,
                            position: "absolute",
                            bottom: "15%",
                            left: "50%",
                            transform: [{ translateX: -322 }]
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/pen.png",
                        height: 225,
                        width: 192,
                        style: {
                            height: 0.2,
                            position: "absolute",
                            top: "48%",
                            left: "23%",
                            transform: [{ translateX: -96 }, { translateY: -112 }]
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/avater.png",
                        height: 670,
                        width: 638,
                        style: {
                            height: 0.15,
                            position: "absolute",
                            right: 0,
                            top: "18%",
                            transform: [{ translateY: -335 }]
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/crab.png",
                        height: 184,
                        width: 195,
                        style: {
                            height: 0.2,
                            position: "absolute",
                            bottom: "5%",
                            right: "5%"
                        }
                    },
                    {
                        type: "Image",
                        src: "background/normal/divide.png",
                        height: 57,
                        width: 61,
                        style: {
                            height: 0.07,
                            position: "absolute",
                            bottom: "5%",
                            left: "5%"
                        }
                    }
                ]
            }
        ],
        children: [
            {
                type: "Image",
                src: "background/normal/bg.png",
                height: 1278,
                width: 251,
                style: {
                    height: 1,
                    top: "0%",
                    position: "absolute",
                    transform: [{ scaleX: 16 }]
                }
            },
            {
                type: "Image",
                src: "background/normal/left_top_light.png",
                height: 755,
                width: 720,
                style: {
                    width: 1,
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/normal/left_top_sun_light.png",
                height: 4092,
                width: 3076,
                style: {
                    width: 1,
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/normal/mountain.png",
                height: 1440,
                width: 1306,
                style: {
                    height: 0.35,
                    position: "absolute",
                    bottom: "25%"
                }
            },
            {
                type: "Image",

                src: "background/normal/right_wave.png",
                height: 2292,
                width: 1792,
                style: {
                    height: 0.6,
                    position: "absolute",
                    right: 0,
                    bottom: "20%"
                }
            },
            {
                type: "Image",
                src: "background/normal/sea_surface.png",
                height: 1392,
                width: 5892,
                style: {
                    height: 0.3,
                    position: "absolute",
                    bottom: 0
                }
            },
            {
                type: "Image",
                src: "background/normal/wave.png",
                height: 1932,
                width: 3082,
                style: {
                    width: 1,
                    position: "absolute",
                    right: 0,
                    bottom: 0
                }
            },
            {
                type: "Image",
                src: "background/normal/title.png",
                height: 285,
                width: 557,
                style: {
                    width: 0.92,
                    position: "absolute",
                    top: "7%",
                    left: "50%",
                    transform: [{ translateX: -278 }]
                }
            },
            {
                type: "Image",
                calcObjList: [
                    {
                        key: "src",
                        value: "background/normal/${(Date.now() < 1718985600000) ? 0 : (Date.now() < 1719072000000) ? 2 : 1}day.png"
                    }
                ],
                src: "background/normal/1day.png",
                height: 2776,
                width: 2438,
                style: {
                    width: 0.9,
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: [{ translateX: -1219 }, { translateY: -1388 }]
                }
            },
            {
                type: "Image",
                src: "background/normal/avater.png",
                height: 670,
                width: 638,
                style: {
                    width: 0.2,
                    position: "absolute",
                    right: 0,
                    top: "33%",
                    transform: [{ translateY: -335 }]
                }
            },
            {
                type: "Image",
                src: "background/normal/crab.png",
                height: 184,
                width: 195,
                style: {
                    width: 0.3,
                    position: "absolute",
                    bottom: "5%",
                    right: "5%"
                }
            },
            {
                type: "Image",
                src: "background/normal/divide.png",
                height: 57,
                width: 61,
                style: {
                    width: 0.1,
                    position: "absolute",
                    bottom: "13%",
                    left: "8%"
                }
            }
        ]
    },
    hd: {
        children: [
            {
                type: "Image",
                src: "background/normal/bg.png",
                height: 1278,
                width: 251,
                style: {
                    height: 1,
                    position: "absolute",
                    transform: [{ scaleX: 24 }]
                }
            },

            {
                type: "Image",
                src: "background/hd/left_top_light.png",
                height: 2288,
                width: 2142,
                style: {
                    height: 1,
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/hd/star_light.png",
                height: 1896,
                width: 1880,
                style: {
                    height: 1,
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/hd/mountain.png",
                height: 1840,
                width: 1816,
                style: {
                    height: 0.5,
                    top: "55%",
                    position: "absolute",
                    transform: [{ translateY: -908 }]
                }
            },
            {
                type: "Image",
                src: "background/hd/right_wave.png",
                height: 2512,
                width: 1918,
                style: {
                    height: 0.85,
                    right: 0,
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/hd/sea.png",
                height: 950,
                width: 5588,
                style: {
                    height: 0.3,
                    top: "70%",
                    position: "absolute"
                }
            },
            {
                type: "Image",
                src: "background/hd/wave.png",
                height: 1506,
                width: 3130,
                style: {
                    height: 0.5,
                    position: "absolute",
                    bottom: 0,
                    right: 0
                }
            },
            {
                type: "Image",
                src: "background/hd/title.png",
                height: 1030,
                width: 2012,
                style: {
                    height: 0.35,
                    position: "absolute",
                    left: "25%",
                    top: "40%",
                    transform: [{ translateY: -515 }, { translateX: -1006 }]
                }
            },
            {
                type: "Image",
                calcObjList: [
                    {
                        key: "src",
                        value: "background/hd/${(Date.now() < 1718985600000) ? 0 : (Date.now() < 1719072000000) ? 2 : 1}day.png"
                    }
                ],
                src: "background/hd/0day.png",
                height: 2108,
                width: 1980,
                style: {
                    height: 0.7,
                    position: "absolute",
                    top: "50%",
                    left: "70%",
                    transform: [{ translateX: -990 }, { translateY: -1054 }]
                }
            },
            {
                type: "Image",
                src: "background/hd/pen.png",
                height: 225,
                width: 192,
                style: {
                    height: 0.2,
                    position: "absolute",
                    left: "55%",
                    top: "20%",
                    transform: [{ translateX: -96 }, { translateY: -112 }]
                }
            },
            {
                type: "Image",
                src: "background/hd/avater.png",
                height: 662,
                width: 632,
                style: {
                    height: 0.2,
                    position: "absolute",
                    top: "2%",
                    right: 0
                }
            },

            {
                type: "Image",
                src: "background/hd/crab.png",
                height: 588,
                width: 740,
                style: {
                    height: 0.2,
                    position: "absolute",
                    right: "6%",
                    bottom: "4%"
                }
            },
            {
                type: "Image",
                src: "background/hd/fish.png",
                height: 270,
                width: 392,
                style: {
                    height: 0.1,
                    position: "absolute",
                    bottom: "8%",
                    left: "10%",
                    transform: [{ translateX: -196 }, { translateY: -135 }]
                }
            },
            {
                type: "Image",
                src: "background/hd/divide.png",
                height: 188,
                width: 200,
                style: {
                    height: 0.05,
                    position: "absolute",
                    bottom: "20%",
                    left: "17%",
                    transform: [{ translateX: -100 }, { translateY: -94 }]
                }
            }
        ]
    }
})
