export const join = (req,res)=>{
    return res.send("user join")
}

export const edit = (req,res) =>{
    return res.send("user edit");
}

export const remove = (req,res) => {
    return res.send("user remove")
}

export const login =(req,res)=>{
    return res.send("user login");
}

export const logout =(req,res)=>{
    return res.send("user logut")
}

export const see =(req,res) => {
    console.log(req.params)
    return res.send("user see");
}
