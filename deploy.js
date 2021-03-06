const Minio = require('minio');
const fs = require('fs');
const BUCKET_NAME = 'www.puroviva.de';

const minioClient = new Minio.Client({
	endPoint: 's3.nl-ams.scw.cloud',
	useSSL: false,
	region: 'nl-ams',
	pathStyle: false,
	accessKey: process.env.ACCESS_KEY,
	secretKey: process.env.SECRET_KEY
});

if (!process.env.ACCESS_KEY || !process.env.SECRET_KEY) {
	throw new Error('ENVIRONMENT VARIABLE MISSING!');
}

function getAllFiles(dir) {
	const allFiles = [];
	const files = fs.readdirSync(dir, { withFileTypes: true });

	files.forEach((dirent) => {
		if (dirent.isFile()) {
			allFiles.push(dir + '/' + dirent.name);
		} else if (dirent.isDirectory()) {
			allFiles.push(...getAllFiles(dir + '/' + dirent.name));
		}
	});

	return allFiles;
}

const allFiles = getAllFiles('dist');

const cond = new Minio.CopyConditions();

allFiles.forEach((filePath) => {
	// copyObject is the wrong method in this case, because it copies existing files from A -> B in the bucket
	// fputObject should be used
	minioClient.copyObject(
		BUCKET_NAME,
		filePath.replace('dist', BUCKET_NAME),
		filePath,
		cond,
		function (error, data) {
			if (error) {
				console.log(error);
				throw new Error(error);
			} else {
				console.log('Successfully copied the object: ' + data.etag);
			}
		}
	);
});
