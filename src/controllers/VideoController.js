

export const trending = (req,res)=> {
    return res.render("home");
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
  