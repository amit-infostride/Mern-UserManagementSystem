const Footer = () => {
	const link = "https://github.com";
	const target = "_blank";

	return (
		<div className="container" style={{marginTop:"50px"}}>
			Copyright © <small>{new Date().getFullYear()}</small>{" "}
			<a href={link} target={target}>
				Amit Kumar
			</a>
		</div>
	);
};

export default Footer;
