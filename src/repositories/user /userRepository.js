import User from './userModel'; 
import VersionableRepository from '../versionable/ versionableRepository';
class UserRepository {
    create = async (req , res) => {
        let users = req.body;
        let result = await VersionableRepository.create(users)
        res.send(result)
    }
    get = async (req, res) => {
        const id = req.params.id;
        let result = await VersionableRepository.get(id)
        res.send(result)     
    }
    update = async (req, res) => {
        let { userId } = req.params;
        let users = req.body;
        let result = await VersionableRepository.update(userId,users)
        res.send(result)
        
    }
    delete = async (req, res) => {
        const id = req.params.id;
        let result = await VersionableRepository.delete(id)
        res.send(result);
    }
} 
export default new UserRepository; 
