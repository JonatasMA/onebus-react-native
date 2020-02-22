const DataBase = {
    "lines": [
        {
            "descriptions": ["* - Extensão até a penitenciária (somente às quintas-feiras, sábados, domingos e feriados)"],
            "neighborhoods": [
                "Marambaia",
                "Centro",
                "Barra",
                "Aeroporto",
                "Penitenciária"
            ],
            "route": "Aeroporto/Padre Tiago (Via SESC)",
            "schedules": [
                {
                    "end": {
                        "description": "Padre Tiago",
                        "hours": [
                            "05:40",
                            "07:10*",
                            "09:30*",
                            "11:40*",
                            "13:20",
                            "15:10",
                            "17:10*",
                            "18:50",
                            "20:40",
                            "22:10"
                        ]
                    },
                    "start": {
                        "description": "Aeroporto",
                        "hours": [
                            "06:20",
                            "08:10",
                            "10:40",
                            "12:30",
                            "14:20",
                            "16:10*",
                            "18:00",
                            "19:50",
                            "21:30"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "neighborhoods": [
                "Centro",
                "Barra",
                "Bela Vista"
            ],
            "route": "Bela Vista/Centro",
            "schedules": [
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:05",
                            "06:35",
                            "07:05",
                            "07:35",
                            "08:15",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:05",
                            "11:35",
                            "12:05",
                            "12:35",
                            "13:10",
                            "13:50",
                            "14:30",
                            "15:10",
                            "15:50",
                            "16:30",
                            "17:05",
                            "17:35",
                            "18:05",
                            "18:35",
                            "19:10",
                            "19:50",
                            "20:30",
                            "21:15",
                            "21:50",
                            "22:35"
                        ]
                    },
                    "start": {
                        "description": "Bela Vista",
                        "hours": [
                            "06:05",
                            "06:35",
                            "07:05",
                            "07:35",
                            "08:15",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:05",
                            "11:35",
                            "12:05",
                            "12:35",
                            "13:10",
                            "13:50",
                            "14:30",
                            "15:10",
                            "15:50",
                            "16:30",
                            "17:05",
                            "17:35",
                            "18:05",
                            "18:35",
                            "19:10",
                            "19:50",
                            "20:30",
                            "21:15",
                            "21:50",
                            "22:35",
                            "23:00"
                        ]
                    },
                    "type": "Dias úteis e sábados"
                },
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:30",
                            "07:30",
                            "08:30",
                            "09:30",
                            "10:30",
                            "11:30",
                            "12:30",
                            "13:30",
                            "14:30",
                            "15:30",
                            "16:30",
                            "17:30",
                            "18:30",
                            "19:30",
                            "20:30",
                            "21:30",
                            "22:30"
                        ]
                    },
                    "start": {
                        "description": "Bela Vista",
                        "hours": [
                            "06:00",
                            "07:00",
                            "08:00",
                            "09:00",
                            "10:00",
                            "11:00",
                            "12:00",
                            "13:00",
                            "14:00",
                            "15:00",
                            "16:00",
                            "17:00",
                            "18:00",
                            "19:00",
                            "20:00",
                            "21:00",
                            "22:00",
                            "23:00"
                        ]
                    },
                    "type": "Domingos e feriados"
                }
            ]
        },
        {
            "descriptions": ["* - Extensão até a Unifaminas"],
            "neighborhoods": [
                "São Pedro",
                "Centro",
                "Barra",
                "Dornelas",
                "Cardoso de Melo"
            ],
            "route": "Cardoso de Melo/São Pedro",
            "schedules": [
                {
                    "end": {
                        "description": "São Pedro",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:40",
                            "08:20",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:40",
                            "12:20",
                            "13:00",
                            "13:40",
                            "14:20",
                            "15:00",
                            "15:40",
                            "16:20",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:00",
                            "19:40",
                            "20:20",
                            "21:00",
                            "21:40",
                            "22:20",
                            "23:00"
                        ]
                    },
                    "start": {
                        "description": "Cardoso de Melo",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:40",
                            "08:20",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:40",
                            "12:20",
                            "13:00",
                            "13:40",
                            "14:20",
                            "15:00",
                            "15:40",
                            "16:20",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:00",
                            "19:40",
                            "20:20",
                            "21:00",
                            "21:40",
                            "22:20*",
                            "23:00"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "descriptions": [
                "* - Indo ao Porto",
                "** - Indo ao Serra do Sol",
                "# Indo ao Distrito Industrial"
            ],
            "neighborhoods": [
                "Centro",
                "Bico Doce",
                "Barra"
            ],
            "route": "Circular (Via Bico Doce)",
            "schedules": [
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:20*#",
                            "07:10",
                            "08:20",
                            "09:20",
                            "10:10*",
                            "11:00",
                            "11:45",
                            "12:30*",
                            "13:30",
                            "14:20*",
                            "15:00",
                            "16:00*",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00",
                            "21:00",
                            "22:30*"
                        ]
                    },
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:10",
                            "07:10",
                            "08:20",
                            "09:20",
                            "10:10",
                            "11:00",
                            "11:45",
                            "12:30",
                            "13:30",
                            "14:20",
                            "15:00",
                            "16:00",
                            "17:00#",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00",
                            "22:00**",
                            "23:00#"
                        ]
                    },
                    "type": "Dias úteis e sábados"
                },
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:30*",
                            "08:00",
                            "10:00*",
                            "12:00*",
                            "14:20*",
                            "16:00*",
                            "18:00",
                            "20:00",
                            "21:30",
                            "22:30*"
                        ]
                    },
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:00",
                            "07:00",
                            "09:00",
                            "11:00",
                            "13:00",
                            "15:00",
                            "17:00",
                            "19:00",
                            "21:00",
                            "22:00",
                            "23:00#"
                        ]
                    },
                    "type": "Domingos e feriados"
                }
            ]
        },
        {
            "neighborhoods": [
                "João XXIII",
                "Barra",
                "Centro"
            ],
            "route": "Circular (Via João XXIII parte alta)",
            "schedules": [
                {
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:10",
                            "07:10",
                            "10:10",
                            "11:45",
                            "12:30",
                            "17:00",
                            "19:10",
                            "20:00"
                        ]
                    },
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "07:10",
                            "10:10",
                            "11:00",
                            "11:45",
                            "15:00",
                            "17:00",
                            "18:20",
                            "19:10",
                            "20:00"
                        ]
                    },
                    "type": "Dias úteis e sábados"
                },
                {
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "07:00",
                            "17:00"
                        ]
                    },
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "10:00",
                            "20:00"
                        ]
                    },
                    "type": "Domingos e feriados"
                }
            ]
        },
        {
            "neighborhoods": [
                "Centro",
                "Barra"
            ],
            "route": "Circular (Via Quinta das Flores)",
            "schedules": [
                {
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:10",
                            "07:10",
                            "08:20",
                            "09:20",
                            "10:10",
                            "11:00",
                            "11:45",
                            "12:30",
                            "13:30",
                            "14:20",
                            "15:00",
                            "16:00",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00",
                            "21:50"
                        ]
                    },
                    "type": "Horários diários"
                },
                {
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:00",
                            "07:00",
                            "09:00",
                            "11:00",
                            "13:00",
                            "15:00",
                            "17:00",
                            "19:00",
                            "21:00",
                            "22:00"
                        ]
                    },
                    "type": "Domingos e feriados"
                }
            ]
        },
        {
            "neighborhoods": [
                "Vale do Castelo",
                "Barra",
                "Centro"
            ],
            "route": "Circular (Via Vale do Castelo)",
            "schedules": [
                {
                    "start": {
                        "description": "Barra",
                        "hours": [
                            "06:10",
                            "07:10",
                            "11:00",
                            "11:45",
                            "17:00",
                            "20:00"
                        ]
                    },
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "07:10",
                            "11:00",
                            "11:45",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00"
                        ]
                    },
                    "type": "Dias úteis e sábados"
                }
            ]
        },
        {
            "neighborhoods": [
                "Dornelas II",
                "Panorama",
                "Barra",
                "Centro"
            ],
            "route": "Dornelas II / Panorama",
            "schedules": [
                {
                    "start": {
                        "description": "Dornelas II",
                        "hours": [
                            "06:20",
                            "07:20",
                            "11:30",
                            "12:30",
                            "16:25",
                            "17:30",
                            "18:30"
                        ]
                    },
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "07:00",
                            "11:10",
                            "12:10",
                            "16:15",
                            "17:10",
                            "18:10"
                        ]
                    },
                    "type": "Dias úteis"
                },
                {
                    "start": {
                        "description": "Dornelas II",
                        "hours": [
                            "06:20",
                            "07:20",
                            "11:30",
                            "12:30"
                        ]
                    },
                    "end": {
                        "description": "Panorama",
                        "hours": [
                            "07:00",
                            "11:10",
                            "12:10",
                            "13:10"
                        ]
                    },
                    "type": "Sábados"
                }
            ]
        },
        // {
        //     "neighborhoods": [
        //         "Cardoso de Melo",
        //         "José Cirilo",
        //         "Santana",
        //         "Dornelas",
        //         "Barra",
        //         "Safira",
        //         "Colety",
        //         "Primavera",
        //         "São Francisco",
        //         "Praça Dr. Lisboa Júnior",
        //         "Rosário",
        //         "Porto",
        //         "Avenida JK",
        //         "Rodoviária",
        //         "Barra",
        //         "Garagem"
        //     ],
        //     "route": "Circular Corujão",
        //     "schedules": [
        //         {
        //             "start": {
        //                 "description": "Cardoso de Melo",
        //                 "hours": [
        //                     "04:45",
        //                     "05:40"
        //                 ]
        //             },
        //             "type": "Horários diários"
        //         }
        //     ]
        // },
        {
            "descriptions": [
                "* - Extensão até a Unifaminas (somente em dias úteis)",
                "** - Indo no Ministério do Trabalho"
            ],
            "neighborhoods": [
                "Centro",
                "Encoberta",
                "Rodoviária",
                "Faminas",
                "Unifaminas"
            ],
            "route": "Encoberta",
            "schedules": [
                {
                    "start": {
                        "description": "Rodoviária",
                        "hours": [
                            "06:00",
                            "06:40**",
                            "07:20",
                            "08:00**",
                            "09:00",
                            "10:00",
                            "11:00",
                            "12:00",
                            "13:00",
                            "14:00**",
                            "15:00",
                            "16:00",
                            "17:00**",
                            "18:00*",
                            "19:00",
                            "20:00",
                            "21:00",
                            "22:00*",
                            "23:00"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até a Unifaminas (somente em dias úteis)",
                "** - Saindo da garagem"
            ],
            "neighborhoods": [
                "Gaspar",
                "Centro",
                "Barra",
                "Primavera",
                "Faminas",
                "Unifaminas"
            ],
            "route": "Gaspar/Primavera",
            "schedules": [
                {
                    "end": {
                        "description": "Primavera",
                        "hours": [
                            "05:50",
                            "06:20",
                            "07:00*",
                            "07:50",
                            "08:40",
                            "09:30",
                            "10:20",
                            "11:00",
                            "11:40",
                            "12:20",
                            "13:10",
                            "14:00",
                            "14:50",
                            "15:30",
                            "16:10",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00",
                            "20:50",
                            "21:40",
                            "22:20",
                            "23:00"
                        ]
                    },
                    "start": {
                        "description": "Gaspar",
                        "hours": [
                            "05:50",
                            "06:20",
                            "07:00",
                            "07:50",
                            "08:40",
                            "09:30",
                            "10:20",
                            "11:00",
                            "11:40*",
                            "12:20",
                            "13:10",
                            "14:00",
                            "14:50",
                            "15:30",
                            "16:10",
                            "17:00",
                            "17:40",
                            "18:20",
                            "19:10",
                            "20:00",
                            "20:50",
                            "21:40",
                            "22:20",
                            "23:00*",
                            "23:40**"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "descriptions": ["* - Extensão até a Unifaminas (somente em dias úteis)"],
            "neighborhoods": [
                "Inconfidência",
                "Centro",
                "Barra",
                "Dornelas",
                "José Cirilo",
                "Joanópolis"
            ],
            "route": "Inconfidência/Joanópolis",
            "schedules": [
                {
                    "end": {
                        "description": "Joanópolis",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:10",
                            "08:50",
                            "09:30",
                            "10:10",
                            "10:50",
                            "11:30",
                            "12:00",
                            "12:30",
                            "13:20",
                            "14:10",
                            "15:00",
                            "15:50",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "21:00",
                            "22:00",
                            "22:30*"
                        ]
                    },
                    "start": {
                        "description": "Inconfidência",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30*",
                            "08:10",
                            "08:50",
                            "09:30",
                            "10:10",
                            "10:50",
                            "11:30",
                            "12:00",
                            "12:30",
                            "13:20",
                            "14:10",
                            "15:00",
                            "15:50",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "21:00",
                            "22:00",
                            "22:30*"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até a Unifaminas",
                "** - Extensão ao Estadual"
            ],
            "neighborhoods": [
                "João XXIII",
                "Centro",
                "Barra",
                "Faminas",
                "Unifaminas",
                "Estadual"
            ],
            "route": "João XXIII",
            "schedules": [
                {
                    "start": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00*",
                            "07:30",
                            "08:10",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:35",
                            "12:10",
                            "12:45",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00*",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:30",
                            "22:10*",
                            "23:00"
                        ]
                    },
                    "end": {
                        "description": "Barra",
                        "hours": [
                            "06:00",
                            "06:30**",
                            "07:00",
                            "07:30",
                            "08:10",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:35",
                            "12:10",
                            "12:45",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:30",
                            "22:10",
                            "23:00"
                        ]
                    },
                    "type": "Dias úteis"
                },
                {
                    "start": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:10",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:35",
                            "12:10",
                            "12:45",
                            "13:20",
                            "14:00",
                            "15:00",
                            "16:00",
                            "17:00",
                            "18:00",
                            "19:00",
                            "20:00",
                            "21:00",
                            "22:00",
                            "23:00"
                        ]
                    },
                    "end": {
                        "description": "Barra",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:10",
                            "09:00",
                            "09:40",
                            "10:20",
                            "11:00",
                            "11:35",
                            "12:10",
                            "12:45",
                            "13:20",
                            "14:30",
                            "15:30",
                            "16:30",
                            "17:30",
                            "18:30",
                            "19:30",
                            "20:30",
                            "21:30",
                            "22:30"
                        ]
                    },
                    "type": "Sábados"
                },
                {
                    "start": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "07:00",
                            "08:00",
                            "09:00",
                            "10:00",
                            "11:00",
                            "12:00",
                            "13:00",
                            "14:00",
                            "15:00",
                            "16:00",
                            "17:00",
                            "18:00",
                            "19:00",
                            "20:00",
                            "21:00",
                            "22:00",
                            "23:00"
                        ]
                    },
                    "end": {
                        "description": "Barra",
                        "hours": [
                            "06:30",
                            "07:30",
                            "08:30",
                            "09:30",
                            "10:30",
                            "11:30",
                            "12:30",
                            "13:30",
                            "14:30",
                            "15:30",
                            "16:30",
                            "17:30",
                            "18:30",
                            "19:30",
                            "20:30",
                            "21:30",
                            "22:30"
                        ]
                    },
                    "type": "Sábados"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até o Divisório",
                "# - Indo ao Dornelas II (Domingos e Feriados)"
            ],
            "neighborhoods": [
                "Napoleão",
                "Centro",
                "Barra",
                "Dornelas",
                "São Cristovão",
                "Divisório",
                "Dornelas II"
            ],
            "route": "Napoleão/São Cristovão",
            "schedules": [
                {
                    "end": {
                        "description": "São Cristovão",
                        "hours": [
                            "06:20*",
                            "07:40",
                            "09:00",
                            "10:20*#",
                            "11:40*",
                            "13:00*#",
                            "14:20",
                            "15:40",
                            "17:00*",
                            "18:20",
                            "19:40",
                            "21:20",
                            "22:30"
                        ]
                    },
                    "start": {
                        "description": "Napoleão",
                        "hours": [
                            "06:00",
                            "07:00#",
                            "08:20",
                            "09:40",
                            "11:00",
                            "12:20",
                            "13:40",
                            "15:00",
                            "16:20",
                            "17:40#",
                            "19:00",
                            "20:20",
                            "22:00"
                        ]
                    },
                    "type": "Dias úteis"
                },
                {
                    "start": {
                        "description": "São Cristóvão",
                        "hours": [
                            "06:20*",
                            "07:40",
                            "09:00",
                            "10:20*",
                            "11:40*",
                            "13:00*",
                            "14:20",
                            "15:40",
                            "17:00*",
                            "18:20*",
                            "19:40",
                            "21:20",
                            "22:30"
                        ]
                    },
                    "type": "Sábados, domingos e feriados"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até a Unifaminas"
            ],
            "neighborhoods": [
                "Planalto",
                "Centro",
                "Barra",
                "Faminas",
                "Unifaminas"
            ],
            "route": "Planalto",
            "schedules": [
                {
                    "start": {
                        "description": "Centro",
                        "hours": [
                            "06:15",
                            "06:45",
                            "07:00*",
                            "07:15*",
                            "08:00",
                            "08:20",
                            "08:40",
                            "09:20",
                            "10:00",
                            "10:40",
                            "11:05*",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:00",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:00",
                            "17:20",
                            "17:50*",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:40",
                            "21:20",
                            "22:00*",
                            "22:30",
                            "23:00"
                        ]
                    },
                    "end": {
                        "description": "Barra",
                        "hours": [
                            "06:15",
                            "06:30",
                            "06:45",
                            "07:15",
                            "07:30",
                            "08:00",
                            "08:40",
                            "09:20",
                            "10:00",
                            "10:20",
                            "10:40",
                            "11:20",
                            "11:45",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:40",
                            "21:20",
                            "22:00",
                            "22:45"
                        ]
                    },
                    "type": "Dias úteis"
                },
                {
                    "start": {
                        "description": "Centro",
                        "hours": [
                            "06:15",
                            "06:45",
                            "07:15",
                            "08:00",
                            "08:40",
                            "09:20",
                            "10:00",
                            "10:40",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:40",
                            "21:20",
                            "22:00",
                            "22:30",
                            "23:00"
                        ]
                    },
                    "end": {
                        "description": "Barra",
                        "hours": [
                            "06:15",
                            "06:45",
                            "07:15",
                            "08:00",
                            "08:40",
                            "09:20",
                            "10:00",
                            "10:40",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:40",
                            "21:20",
                            "22:00",
                            "22:30"
                        ]
                    },
                    "type": "Sábados, domingos e feriados"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até a Unifaminas",
                "# - Indo ao J. Azevedo",
            ],
            "neighborhoods": [
                "Centro",
                "Barra",
                "Dornelas",
                "José Cirilo",
                "Franco Suiço",
                "Santana",
                "Faminas",
                "J. Azevedo",
                "Unifaminas"
            ],
            "route": "Santana/Centro",
            "schedules": [
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "06:15",
                            "06:30*",
                            "06:45",
                            "07:00",
                            "07:15",
                            "07:30*",
                            "07:45",
                            "08:00",
                            "08:30",
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "10:45",
                            "11:00",
                            "11:15*",
                            "11:40",
                            "12:00",
                            "12:20",
                            "12:40",
                            "13:00",
                            "13:20",
                            "13:40",
                            "14:00",
                            "14:20",
                            "14:40",
                            "15:00",
                            "15:20",
                            "15:40",
                            "16:00",
                            "16:20",
                            "16:40",
                            "17:00",
                            "17:20",
                            "17:40",
                            "18:00",
                            "18:20",
                            "18:40",
                            "19:00",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30*",
                            "23:00",
                            "23:30"
                        ]
                    },
                    "start": {
                        "description": "Santana",
                        "hours": [
                            "06:00",
                            "06:15",
                            "06:30",
                            "06:45",
                            "07:00",
                            "07:15",
                            "07:30",
                            "07:45",
                            "08:00",
                            "08:30",
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "10:45",
                            "11:00",
                            "11:15*",
                            "11:40",
                            "12:00",
                            "12:20",
                            "12:40",
                            "13:00",
                            "13:20",
                            "13:40",
                            "14:00",
                            "14:20",
                            "14:40",
                            "15:00",
                            "15:20",
                            "15:40",
                            "16:00",
                            "16:20",
                            "16:40",
                            "17:00",
                            "17:20",
                            "17:40#",
                            "18:00",
                            "18:20",
                            "18:40*",
                            "19:00",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30*",
                            "23:00"
                        ]
                    },
                    "type": "Dias úteis"
                },
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "06:15",
                            "06:30",
                            "06:45",
                            "07:00",
                            "07:15",
                            "07:30",
                            "07:45",
                            "08:00",
                            "08:30",
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "10:45",
                            "11:00",
                            "11:20",
                            "11:40",
                            "12:00",
                            "12:20",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30",
                            "23:00",
                            "23:30"
                        ]
                    },
                    "start": {
                        "description": "Santana",
                        "hours": [
                            "06:00",
                            "06:15",
                            "06:30",
                            "06:45",
                            "07:00",
                            "07:15",
                            "07:30",
                            "07:45",
                            "08:00",
                            "08:30",
                            "09:00",
                            "09:30",
                            "10:00",
                            "10:30",
                            "10:45",
                            "11:00",
                            "11:20",
                            "11:40",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30",
                            "23:00"
                        ]
                    },
                    "type": "Sábados"
                },
                {
                    "end": {
                        "description": "Centro",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:00",
                            "09:00",
                            "10:00",
                            "10:45",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30",
                            "23:00",
                            "23:30"
                        ]
                    },
                    "start": {
                        "description": "Santana",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:00",
                            "07:30",
                            "08:00",
                            "09:00",
                            "10:00",
                            "10:45",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:20",
                            "14:00",
                            "14:40",
                            "15:20",
                            "16:00",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:20",
                            "20:00",
                            "20:50",
                            "21:20",
                            "22:00",
                            "22:30",
                            "23:00"
                        ]
                    },
                    "type": "Domingos e feriados"
                }
            ]
        },
        {
            "neighborhoods": [
                "São Francisco",
                "Centro"
            ],
            "route": "São Francisco (Via Recanto Verde)",
            "schedules": [
                {
                    "start": {
                        "description": "Rodoviária",
                        "hours": [
                            "06:00",
                            "06:40",
                            "07:20",
                            "08:10",
                            "09:00",
                            "10:00",
                            "11:10",
                            "12:00",
                            "13:00",
                            "14:00",
                            "15:00",
                            "16:00",
                            "17:00",
                            "18:00",
                            "19:00",
                            "20:00",
                            "21:00",
                            "22:00",
                            "23:00"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "neighborhoods": [
                "Marambaia",
                "Centro",
                "Barra",
                "Dornelas",
                "José Cirilo",
                "Joanópolis",
                "Padre Tiago",
                "São Joaquim"
            ],
            "route": "São Joaquim/Marambaia (Padre Tiago)",
            "schedules": [
                {
                    "start": {
                        "description": "São Joaquim",
                        "hours": [
                            "06:30",
                            "07:40",
                            "09:10",
                            "10:30",
                            "11:50",
                            "13:10",
                            "14:50",
                            "16:20",
                            "17:50",
                            "19:10",
                            "20:30",
                            "21:50"
                        ]
                    },
                    "end": {
                        "description": "Marambaia",
                        "hours": [
                            "06:00",
                            "07:00",
                            "08:30",
                            "09:50",
                            "11:10",
                            "12:30",
                            "14:00",
                            "15:30",
                            "17:00",
                            "18:30",
                            "19:50",
                            "21:10",
                            "22:20"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "neighborhoods": [
                "Santo Antônio",
                "Centro",
                "Barra",
                "José Cirilo",
                "Joanópolis",
                "São Joaquim"
            ],
            "route": "São Joaquim/Santo Antônio",
            "schedules": [
                {
                    "start": {
                        "description": "São Joaquim",
                        "hours": [
                            "06:30",
                            "08:00",
                            "10:00",
                            "11:50",
                            "13:10",
                            "14:50",
                            "16:20",
                            "17:50",
                            "19:00",
                            "20:50",
                            "22:00"
                        ]
                    },
                    "end": {
                        "description": "Santo Antônio",
                        "hours": [
                            "06:00",
                            "07:00",
                            "09:00",
                            "11:10",
                            "12:30",
                            "14:00",
                            "15:20",
                            "17:00",
                            "18:30",
                            "20:10",
                            "21:30",
                            "22:30"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        },
        {
            "descriptions": [
                "* - Extensão até a Faminas (somente em dias úteis)",
                "** - Extensão até o Via Park (somente aos sábados, domingos e feriados)"
            ],
            "neighborhoods": [
                "Santa Terezinha",
                "Centro",
                "Barra",
                "São José",
                "Patrimônio"
            ],
            "route": "São José/Santa Terezinha",
            "schedules": [
                {
                    "start": {
                        "description": "São José",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:20*",
                            "08:00**",
                            "08:50**",
                            "09:40**",
                            "10:40",
                            "11:20",
                            "12:00",
                            "12:40",
                            "13:30",
                            "14:10",
                            "15:00",
                            "15:50",
                            "16:40",
                            "17:20",
                            "18:00",
                            "18:40",
                            "19:30",
                            "20:20",
                            "21:10",
                            "22:00",
                            "22:30*"
                        ]
                    },
                    "end": {
                        "description": "Santa Terezinha",
                        "hours": [
                            "06:00",
                            "06:30",
                            "07:20",
                            "08:00",
                            "08:50",
                            "09:40",
                            "10:40",
                            "11:20",
                            "12:00",
                            "12:40**",
                            "13:30**",
                            "14:10",
                            "15:00",
                            "15:50",
                            "16:40**",
                            "17:20**",
                            "18:00**",
                            "18:40",
                            "19:30",
                            "20:20",
                            "21:10",
                            "22:00",
                            "22:30*"
                        ]
                    },
                    "type": "Horários diários"
                }
            ]
        }
    ]
};

export default DataBase;