1-npm init -y <br/>
2-npm i babel-cli babel-preset-es2015 --save <br/>
3-Update to scripts row in package.json file; <br/>
			"scripts": { <br/>
					"start":"babel-node index.js --presets es2015", <br/>
					"test": "echo \"Error: no test specified\" && exit 1" <br/>
				}, <br/>
4-Save Files. <br/>
5-Create index.js and mathModule.js files. <br/>
6-Run "npm start" command in terminal. <br/>
