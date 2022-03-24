import React, { useEffect, useState } from "react";
import axios from "axios";

interface IJoke {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}

const Joke: React.FunctionComponent = () => {
	const getJoke = () => {
    setIsJokeLoading(true)
		axios.get<IJoke>("https://api.chucknorris.io/jokes/random").then((j) => {
			setJoke(j.data);
      setIsJokeLoading(false)
		});
	};
	const [joke, setJoke] = useState<IJoke>();
  const [isJokeLoading, setIsJokeLoading] = useState<boolean>(false)
	useEffect(() => {
		getJoke();
	}, []);
	return (
		<div className="flex justify-center mt-5 border border-orange-300 p-5 flex-col m-2">
			<p className="text-center mb-3 font-bold">
        {isJokeLoading ? "loading..." : 
        joke && `${joke?.value}`}
      </p>
			<div className="flex justify-center">
				<button className="bg-orange-500 px-2 py-1 rounded text-white font-bold "
        onClick={getJoke}
        >get joke</button>
			</div>
		</div>
	);
};

export default Joke;
