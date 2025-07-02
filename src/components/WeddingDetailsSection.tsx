import { Calendar, Clock, MapPin } from "lucide-react";
import { useContext } from "react";
import { WeddingContext } from "@/contexts/WeddingContext";
import EditableText from "./EditableText";

const WeddingDetailsSection = () => {
    const context = useContext(WeddingContext);

    if (!context) return null;

    const { weddingData, isLoggedIn, updateWeddingData } = context;

    return (
        <section id="details" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Wedding Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Event 1 */}
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20">
                            <EditableText
                                value={weddingData.weddingDetails.event1.title}
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            event1: {
                                                ...weddingData.weddingDetails
                                                    .event1,
                                                title: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-2xl font-bold text-gray-800 mb-4"
                            />

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Calendar
                                        className="text-purple-600"
                                        size={20}
                                    />
                                    <EditableText
                                        value={
                                            weddingData.weddingDetails.event1
                                                .date
                                        }
                                        onSave={async (value) => {
                                            await updateWeddingData({
                                                weddingDetails: {
                                                    ...weddingData.weddingDetails,
                                                    event1: {
                                                        ...weddingData
                                                            .weddingDetails
                                                            .event1,
                                                        date: value,
                                                    },
                                                },
                                            });
                                        }}
                                        isLoggedIn={isLoggedIn}
                                        className="text-gray-700"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock
                                        className="text-purple-600"
                                        size={20}
                                    />
                                    <EditableText
                                        value={
                                            weddingData.weddingDetails.event1
                                                .time
                                        }
                                        onSave={async (value) => {
                                            await updateWeddingData({
                                                weddingDetails: {
                                                    ...weddingData.weddingDetails,
                                                    event1: {
                                                        ...weddingData
                                                            .weddingDetails
                                                            .event1,
                                                        time: value,
                                                    },
                                                },
                                            });
                                        }}
                                        isLoggedIn={isLoggedIn}
                                        className="text-gray-700"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin
                                        className="text-purple-600 mt-1"
                                        size={20}
                                    />
                                    <div>
                                        <EditableText
                                            value={
                                                weddingData.weddingDetails
                                                    .event1.venue
                                            }
                                            onSave={async (value) => {
                                                await updateWeddingData({
                                                    weddingDetails: {
                                                        ...weddingData.weddingDetails,
                                                        event1: {
                                                            ...weddingData
                                                                .weddingDetails
                                                                .event1,
                                                            venue: value,
                                                        },
                                                    },
                                                });
                                            }}
                                            isLoggedIn={isLoggedIn}
                                            className="text-gray-700 font-medium"
                                        />
                                        <br />
                                        <EditableText
                                            value={
                                                weddingData.weddingDetails
                                                    .event1.address
                                            }
                                            onSave={async (value) => {
                                                await updateWeddingData({
                                                    weddingDetails: {
                                                        ...weddingData.weddingDetails,
                                                        event1: {
                                                            ...weddingData
                                                                .weddingDetails
                                                                .event1,
                                                            address: value,
                                                        },
                                                    },
                                                });
                                            }}
                                            isLoggedIn={isLoggedIn}
                                            className="text-gray-600 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20">
                            <EditableText
                                value={weddingData.weddingDetails.event2.title}
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            event2: {
                                                ...weddingData.weddingDetails
                                                    .event2,
                                                title: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-2xl font-bold text-gray-800 mb-4"
                            />

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Calendar
                                        className="text-purple-600"
                                        size={20}
                                    />
                                    <EditableText
                                        value={
                                            weddingData.weddingDetails.event2
                                                .date
                                        }
                                        onSave={async (value) => {
                                            await updateWeddingData({
                                                weddingDetails: {
                                                    ...weddingData.weddingDetails,
                                                    event2: {
                                                        ...weddingData
                                                            .weddingDetails
                                                            .event2,
                                                        date: value,
                                                    },
                                                },
                                            });
                                        }}
                                        isLoggedIn={isLoggedIn}
                                        className="text-gray-700"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock
                                        className="text-purple-600"
                                        size={20}
                                    />
                                    <EditableText
                                        value={
                                            weddingData.weddingDetails.event2
                                                .time
                                        }
                                        onSave={async (value) => {
                                            await updateWeddingData({
                                                weddingDetails: {
                                                    ...weddingData.weddingDetails,
                                                    event2: {
                                                        ...weddingData
                                                            .weddingDetails
                                                            .event2,
                                                        time: value,
                                                    },
                                                },
                                            });
                                        }}
                                        isLoggedIn={isLoggedIn}
                                        className="text-gray-700"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin
                                        className="text-purple-600 mt-1"
                                        size={20}
                                    />
                                    <div>
                                        <EditableText
                                            value={
                                                weddingData.weddingDetails
                                                    .event2.venue
                                            }
                                            onSave={async (value) => {
                                                await updateWeddingData({
                                                    weddingDetails: {
                                                        ...weddingData.weddingDetails,
                                                        event2: {
                                                            ...weddingData
                                                                .weddingDetails
                                                                .event2,
                                                            venue: value,
                                                        },
                                                    },
                                                });
                                            }}
                                            isLoggedIn={isLoggedIn}
                                            className="text-gray-700 font-medium"
                                        />
                                        <br />
                                        <EditableText
                                            value={
                                                weddingData.weddingDetails
                                                    .event2.address
                                            }
                                            onSave={async (value) => {
                                                await updateWeddingData({
                                                    weddingDetails: {
                                                        ...weddingData.weddingDetails,
                                                        event2: {
                                                            ...weddingData
                                                                .weddingDetails
                                                                .event2,
                                                            address: value,
                                                        },
                                                    },
                                                });
                                            }}
                                            isLoggedIn={isLoggedIn}
                                            className="text-gray-600 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Information */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
                            <EditableText
                                value={weddingData.weddingDetails.toKnow1.title}
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow1: {
                                                ...weddingData.weddingDetails
                                                    .toKnow1,
                                                title: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-lg font-semibold text-gray-800 mb-3"
                            />
                            <EditableText
                                value={
                                    weddingData.weddingDetails.toKnow1
                                        .description
                                }
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow1: {
                                                ...weddingData.weddingDetails
                                                    .toKnow1,
                                                description: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-gray-600 text-sm"
                                multiline
                            />
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
                            <EditableText
                                value={weddingData.weddingDetails.toKnow2.title}
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow2: {
                                                ...weddingData.weddingDetails
                                                    .toKnow2,
                                                title: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-lg font-semibold text-gray-800 mb-3"
                            />
                            <EditableText
                                value={
                                    weddingData.weddingDetails.toKnow2
                                        .description
                                }
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow2: {
                                                ...weddingData.weddingDetails
                                                    .toKnow2,
                                                description: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-gray-600 text-sm"
                                multiline
                            />
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
                            <EditableText
                                value={weddingData.weddingDetails.toKnow3.title}
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow3: {
                                                ...weddingData.weddingDetails
                                                    .toKnow3,
                                                title: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-lg font-semibold text-gray-800 mb-3"
                            />
                            <EditableText
                                value={
                                    weddingData.weddingDetails.toKnow3
                                        .description
                                }
                                onSave={async (value) => {
                                    await updateWeddingData({
                                        weddingDetails: {
                                            ...weddingData.weddingDetails,
                                            toKnow3: {
                                                ...weddingData.weddingDetails
                                                    .toKnow3,
                                                description: value,
                                            },
                                        },
                                    });
                                }}
                                isLoggedIn={isLoggedIn}
                                className="text-gray-600 text-sm"
                                multiline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingDetailsSection;
