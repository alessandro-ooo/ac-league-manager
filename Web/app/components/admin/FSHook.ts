import { promises as fs } from 'fs';
import { TServerSettings } from '../types';

const FSHook = async (data: TServerSettings) => {
    const file = await fs.writeFile('../Assetto Corsa Server/cfg/server_cfg.ini', JSON.stringify(data));
    return 1
}

export default FSHook