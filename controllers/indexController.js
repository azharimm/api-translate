const translate = require("google-baidu-translate-api");

exports.index = async (req, res) => {
	try {
		const engine = req.query.engine;
		const text = req.query.text;
		let to = req.query.to;
		let result;
		if (engine != "google" && engine != "baidu") {
			throw new Error(
				"Please specify translate engine either google or baidu"
			);
			next();
        }
        
        if(text == null || text == '' || text == undefined) {
            throw new Error(
				"Text query cannot be null"
			);
			next();
        }

        if(to == null || to == '' || to == undefined) {
            to = "en";
        }

		if (engine == "google") {
			result = await translate.google(text, to);
		} else {
			result = await translate.baidu(text, to);
		}
		res.status(200).json({
			status: true,
			message: "success",
			data: {
				origin: result.src,
				result: result.dist,
				targets: result.targets,
			},
		});
	} catch (error) {
		res.status(500).json(
			{
				status: false,
				message: "Server error: ",
				data: {
					error: error.message,
				},
			},
		);
	}
};
