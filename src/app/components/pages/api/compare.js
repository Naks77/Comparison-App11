// components/pages/api/compare.js

export default function handler(req, res) {

    const solarDetails =[
        {
            "name": "SunPower Maxeon 5",
            "price": "R500",
            "specs": "400W,Monocrystalline, 85% efficiency",
            "reliability": "High",
            "unsplash_url": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "LG NeON 2",
            "price": "R450",
            "specs": "380W, Monocrystalline, 65% efficiency",
            "reliability": "Medium",
            "unsplash_url": "https://plus.unsplash.com/premium_photo-1680206586349-ddf92488bbbe?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Canadian Solar",
            "price": "R320",
            "specs": "100W,Thin-Film, 18% efficiency",
            "reliability": "Low",
            "unsplash_url": "https://images.unsplash.com/photo-1631771819642-90cee9a2ccac?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "REC Alpha",
            "price": "R550",
            "specs": "420W, Monocrystalline, 99% efficiency",
            "reliability": "High",
            "unsplash_url": "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Trina Solar",
            "price": "R400",
            "specs": "330W, Monocrystalline, 45% efficiency",
            "reliability": "Medium",
            "unsplash_url": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Jinko Solar",
            "price": "R420",
            "specs": "360W, Monocrystalline, 50% efficiency",
            "reliability": "Medium",
            "unsplash_url": "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
        } 
    ];

    // Respond with the solar details
    res.status(200).json(solarDetails);
}