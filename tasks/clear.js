import log from 'fancy-log';
import colors from 'colors';
import del from 'del';

import settings from '../settings.json';

const clear = () => {
    log.info(colors.green(`Clean directory - ${settings.path.build}`));
    return del(`./${settings.path.build}`)
};

export default clear;