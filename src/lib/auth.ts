import  CredentialsProvider  from "next-auth/providers/credentials";

export const  authOptions = {

    providers: [
        CredentialsProvider({
            
            name: "Credentials",
            credentials :{
                username: {label: "email", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

                if(user){
                    return user;
                }else {
                    return null;
                }
        }})
    ]
}

