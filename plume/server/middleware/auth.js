import jwt from 'jsonwebtoken';

// Auth middleware confirms if users have the permission to do certain actions

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        
        if(token && isCustomAuth) {
            // Our own authentication
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            // Google authentication
            decodedData = jwt.decode(token);

            // 'sub' is Google's version of ID
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;