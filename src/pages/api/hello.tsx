import posts from "../../assets/data.json"
export default function handler(req: any, res: any) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(posts)
          break
        case 'POST':
            res.status(200).json(posts)
          break
        case 'PUT':
          //...
          break
        case 'DELETE':
          console.log(req)
          break
        default:
          res.status(405).end() // Method not allowed
          break
      }
    
}