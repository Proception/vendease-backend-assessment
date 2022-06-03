const documentation = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Vendease',
        description: 'Vendease Backend',
        contact: {
            name: 'Benedict Esimaje',
            email: 'omasan.esimaje@gmail.com',
            url: 'http://www.benedictesimaje.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:8080/',
            description: 'Local server'
        },
        {
            url: process.env.APP_URL ,
            description: 'Production server'
        }
    ],
    tags: [
        {
            name: 'Vendease'
        }
    ],
    paths: {
        '/api/v1/episodes': {
            get: {
                tags: ['Episodes'],
                description: 'Returns episodes',
                operationId: 'getEpisodes',
                responses: {
                    '200': {
                        description: 'Returns a list of episodes sorted by releaseDate from oldest to newest',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Success',
                                    data: [{
                                        id: 3,
                                        code: "SAMPLE",
                                        releaseDate: "2022-03-01 20:04:49.16+00"
                                    }]
                                }
                            }
                        }
                    },
                }
            }
        },
        '/api/v1/episodes/{character}': {
            get: {
                tags: ['Episodes'],
                description: 'Returns episodes a character was featured in',
                operationId: 'getEpisodesByCharacter',
                parameters: [
                    {
                        name: "characterId",
                        in: "path",
                        type: "integer",
                        description: "returns episodes by character ID",
                    },
                ],
                responses: {
                    200: {
                        description: 'Returns a list of episodes',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Success',
                                    data: [{}]
                                }
                            }
                        }
                    },
                }
            }
        },
        '/api/v1/comments': {
            post: {
                tags: ['Comments', 'Episodes'],
                description: 'Adds a comment to an episode',
                operationId: 'addComments',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/addComment'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'Successfully adds a comment to an episode',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Comment successfully added',
                                    data: [{}]
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Invalid comment length',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Comment value exceeded the limit of 249 characters',
                                    data: [{}]
                                }
                            }
                        }
                    },
                }
            }
        },
        '/api/v1/comments/{episodeId}': {
            get: {
                tags: ['Comments'],
                description: 'Returns comments by episode ID',
                operationId: 'getComments',
                parameters: [
                    {
                        name: "episodeId",
                        in: "path",
                        description: "ID of episode",
                        required: true,
                        type: "integer",
                        format: "int64"
                    }
                ],
                responses: {
                    '200': {
                        description: 'Returns a list of comments in reverse chronological order',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Success',
                                    data: [{
                                        episodeId: 3,
                                        comment: "I love this episode!",
                                        ipAddressLocation: "127.0.0.1"
                                    }]
                                }
                            }
                        }
                    },
                }
            },
        },
        '/api/v1/characters/filter': {
            post: {
                tags: ['Characters'],
                description: 'Returns characters',
                operationId: 'getCharacter',
                parameters: [
                    {
                        name: "filters",
                        in: "body",
                        type: "object",
                        description: "Filter by only one of the keys",
                        properties: {
                            gender: {
                                type: "string",
                                example: "MALE"
                            },
                            status: {
                                type: "string",
                                example: "ACTIVE"
                            },
                            location: {
                                type: "string",
                                example: "VI"
                            },
                        },
                    },
                    {
                        name: "sort",
                        in: "body",
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                example: "ASC"
                            },
                            gender: {
                                type: "string",
                                example: "DESC"
                            },
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Returns a list of characters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Success',
                                    data: [{
                                        id: "4",
                                        firstName: "John",
                                        lastName: "Bosco",
                                        status: "ACTIVE",
                                        gender: "MALE",
                                        stateOfOrigin: "Lagos State",
                                        location: {
                                            id: 3,
                                            name: "Victoria Island",
                                            latitude: 34.0099897787,
                                            longitude: 34.0099897787,
                                        },
                                        episodes: [{
                                            id: 3,
                                            code: "TEST",
                                            releaseDate: "2022-03-01 20:04:49.16+00",
                                        }]
                                    }]
                                }
                            }
                        }
                    },
                }
            }
        },
        '/api/v1/characters/episodes': {
            get: {
                tags: ['Episodes'],
                description: 'Searches for a character\'s episodes by first name or last name',
                operationId: 'getEpisodesByCharacterName',
                parameters: [
                    {
                        name: "characterName",
                        in: "query",
                        type: "string",
                        description: "searches for episodes that match a characters name",
                    },
                ],
                responses: {
                    200: {
                        description: 'Returns a list of episodes',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                                example: {
                                    code: 0,
                                    msg: 'Success',
                                    data: [{}]
                                }
                            }
                        }
                    },
                }
            }
        },
    },
    components: {
        schemas: {
            addComment: {
                type: "object",
                properties: {
                    episodeId: {
                        type: "integer",
                        example: 4,
                        required: true,
                    },
                    comment: {
                        type: "string",
                        example: "I love this episode!",
                        minLength: 1,
                        maxLength: 249,
                        required: true,
                    },
                }
            },
            getComments: {
                type: "object",
                properties: {
                    episodeId: {
                        type: "integer",
                        example: 4,
                        required: true,
                    },
                }
            },
            Episode: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 4,
                        required: true,
                    },
                    code: {
                        type: "string",
                        example: "TEST",
                        required: true,
                    },
                    releaseDate: {
                        type: "date",
                        example: "2022-03-01 20:04:49.16+00",
                        required: true,
                    }
                }
            },
            Character: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 4,
                        required: true,
                    },
                    firstName: {
                        type: "string",
                        example: "John",
                        required: true,
                    },
                    lastName: {
                        type: "string",
                        example: "Bosco",
                        required: true,
                    },
                    status: {
                        type: "string",
                        example: "ACTIVE",
                        required: true,
                    },
                    stateOfOrigin: {
                        type: "string",
                        example: "Delta State",
                    },
                    gender: {
                        type: "string",
                        example: "MALE",
                        required: true,
                    },
                    location: {
                        type: "object",
                    },
                    episodes: {
                        type: "array",
                    },
                },
            },
            Sort: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        example: "ASC"
                    },
                    gender: {
                        type: "string",
                        example: "DESC"
                    },
                }
            },
            id: {
                type: 'string',
                description: 'Unique Id',
                example: ''
            },
            createdAt: {
                type: 'string',
                description: 'Date the record was persisted in the database',
                example: '2016-01-29T13:18:38.649Z'
            },
            Payload: {
                type: 'object',
                properties: {}
            },
            Response: {
                type: 'object',
                properties: {
                    code: {
                        type: 'integer',
                        example: 0
                    },
                    msg: {
                        type: 'string',
                        example: 'Success'
                    },
                    data: {
                        type: 'object',
                        properties: {}
                    }
                }
            },
            ErrorObject: {
                type: 'object',
                properties: {
                    value: {
                        type: 'string'
                    },
                    msg: {
                        type: 'string'
                    },
                    param: {
                        type: 'string'
                    },
                    location: {
                        type: 'string'
                    }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    code: {
                        type: 'integer',
                        example: 4
                    },
                    msg: {
                        type: 'string',
                        example: 'Validation Error'
                    },
                    errors: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/ErrorObject'
                        }
                    }
                }
            }
        },
    }
};

export default documentation
