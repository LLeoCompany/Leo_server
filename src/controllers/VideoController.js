let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    }
];

const fakeUser = {
    username : "sunghwan",
    loggedIn:false,
}

export const trending = (req,res)=> {

    return res.render("home",{pageTitle:"HOME",videos})
}


export const see = (req,res)=>{
    return res.render("watch");
}

export const edit = (req,res) =>{
    return res.send("video edit")
}
export const search = (req,res)=> {
    return res.send("video search")
}

export const remove = (req,res) =>{
    return res.send("delete video")
}

export const upload = (req,res) => {
    return res.send("upload video");
}
  