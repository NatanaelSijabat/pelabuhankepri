import path from 'path';
import fs from 'fs';

export const getProtectedRoutes = () => {
    const adminPath = './admin';
    const subDirectories: string[] = [];

    fs.readdirSync(adminPath).forEach((item: string) => {
        const itemPath = path.join(adminPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            subDirectories.push(item);
        }
    });

    const protectedRoutes = subDirectories.map((dirName: string) => path.join(adminPath, dirName));
    return protectedRoutes;
}


export const protectedRoutes = ['/admin']
export const authRoutes = ['/admin/login']
export const publicRoutes = ['/artikel']
