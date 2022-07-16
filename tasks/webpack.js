import webpack from 'webpack';
import webpackConfig from '../webpack.config';

const webpackRun = webpack(webpackConfig);

const webpackTask = (callback) => {
    webpackRun.run((err) => {
		if (err) {
			console.log(err);
		} else {
            console.log('Webpack compile successfully'.green);
		}

		callback();
	});
};

export default webpackTask;