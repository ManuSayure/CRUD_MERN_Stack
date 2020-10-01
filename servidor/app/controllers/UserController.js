const User = require('../models/User');

class UserController {
    async store(req, res) {
        const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

      const user = User.create({
        name, email, password
      })
      .then(
          user=>res.status(201).json({
              data:user,
              error:false,
              message:'usuario adicionado com sucesso!'

        })).catch( error => res.status(500).json({
            data:[],
            error:true,
            message:error.message
        }));
  
      //return res.json(user);
    }
  
    async index(req, res){
      const users = User.findAll(

      ).then(users =>res.status(200).json({
          data:users,
          error:false,
          message:'todos os usuarios'

      })).catch(error=>res.status(500).json({
          data:[],
          error:true,
          message:error.message

      }));
  
      //return res.json(users);
    }
    async getById(req, res){
        const user_id = req.params.id;
        const user = User.findOne({
            where:{
                id:user_id
            }
        })
        .then(user => res.status(201).json({
            data: user,
            error:false,
            message:`usuário ${user.name}`
        }))
        .catch(error=>res.status(500).json({
            data:[],
            error:true,
            message:error.message

        }));
       
    }
    async update(req, res){
        const user_id=req.params.id;
        const{name, email, password} = req.body;
        const data = [name, email,password];
        User.update({
            name,
            email,
            password
        },{
            where:{
                id:user_id
            }
        })
        .then(data => res.status(200).json({
            data:data,
            error:false,
            message:'dados atualizados com sucesso'
        }))
        .catch( error => res.status(500).json({
            error:true,
            message:error.message
        }))
    }
    async destroy(req, res){
        const user_id=req.params.id;
        User.destroy({
            where:{
                id:user_id
            }
        })
        .then(status=>res.status(201).json({
            error:false,
            message:'usuario foi deletado'
        }))
        .catch(error=>res.status(500).json({
            error:true,
            message:error.message
        }));     

    }
  }  
  module.exports = new UserController();


/*const createUser = async (req, res) =>{
    try{
        const user = await User.create(req.body);
        return res.status(201).json({
             data:user,
             error:false,
             message:'Cadastro realizado com sucesso!'
        });        
    }catch(error){
        return res.status(500).json({
            message:error.message,
            data:[],
            error:true
        });
    }
};
const getAllUsers = async(req, res) =>{
    try{
        const users = await User.findAll();
        return res.status(200).json({
            data:users,
            error:false,
            message:'Todos os usuarios cadastrados'
        });

    }catch(error){
        return res.status(500).json({
            data:[],
            error:true,
            message:'Nenhum resultado encontrado'
        });
    }
}
const getUserById = async(req, res)=>{
    try{

    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const deleteUser = async(req, res) =>{
    try{

    }catch(error){

    }
}
const updateUser = async(req, res)=>{
    try{

    }catch(error){

    }
}



module.exports={
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
};*/