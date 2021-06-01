import useSWR from "swr";
import fetch from "unfetch";

const PostLogin = ({username, password}) => {
	const fetcher = async (url) => {
    let data = {
      username: username,
      password: password,
    };
        const res = await fetch("http://localhost:8000/submitlogin", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then(
                (response) => {
                 
                },
                (error) => {
                  console.log(error);
                }
              );
          
		return res.json();
	};

	// const { data, error } = useSWR(
	// 	"http://localhost:8000/submitlogin",
	// 	fetcher
	// );
  let data = {

    
  }

	console.log(data);

	return {
		data: data,
    message:"Here",
    error:"error"
	};
};

export default PostLogin;
