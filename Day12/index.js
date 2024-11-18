const features = ["camera",
    "microphone",
    "speaker",
    "long-life"
]

const gadget = {
    gadgetName: "iphone",
    price: "$120",
    features: features,
    function: function () {
        console.log("smart phone")
    },
    isAvailabler: true,
    rating: 4.5,
    description: "this is powerfull product"
}
console.log(gadget)

const gadgetupdate = {
    gadgetName: "iphone",
    price: "$120",
    features,
    function() {
        console.log("smart phone")
    },
    isAvailabler: true,
    rating: 4.5,
    description: "this is powerfull product"
}
console.log(gadgetupdate.function())
