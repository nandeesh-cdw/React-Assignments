export const APP_MESSAGES = {
    HEADER_MESSAGES: {
        TITLE: 'explorer',
        NAV_LINKS: [
            {
                name:'Hotels',
                path:'/hotels'
            },
            {
                name:'Bike Rentals',
                path:'/bikerentals'
            },
            {
                name:"Restaurants",
                path:'/restaurants'
            },
        ]
    },
    FORM_MESSAGES:{
        HEADING:'Contact Us',
        SUB_HEADING:'Our Sales Team will reach out to you ASAP!',
        INPUT_LABELS:
        {
            NAME:"Name",
            HOME_TOWN:"Your Home town",
            WHERE_TO_GO:"Where would you like to go?",
            CONTACT:"Contact Number"
        },
        SUBMIT:"SUBMIT INTEREST"
    },
    LOREM:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type 
     specimen book. It has survived not only five centuries, but also the leap into 
     electronic typesetting, remaining essentially unchanged.`
}
export const ROUTES = {
    SPECIFIC_PLACE:'https://nijin-server.vercel.app/api/explorer/places/'
}

export const APP_DATA={
    DESTINATIONS:[
        'Chidambaram',
        'Kumbakonam',
        'Masinagudi',
        'Pollachi',
        'Thanjavur',
        'Tirunelveli'
    ],
    HOME_TOWN:[
        'Bangalore',
        'Chennai',
        'Kerala'
    ]
}