import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const asyncScrypt = promisify(scrypt);

class PasswordUtil {
  static async hashPassword(password: string) {
    const salt = randomBytes(128).toString('base64');
    const hashed = (await asyncScrypt(password, salt, 64)) as Buffer;

    return `${hashed.toString('hex')}.${salt}`;
  }

  static async comparePassword(
    suppliedPassword: string,
    storedPassword: string,
  ) {
    const [hashedStoredPassword, salt] = storedPassword.split('.');

    const hashedSuppliedPassword = (await asyncScrypt(
      suppliedPassword,
      salt,
      64,
    )) as Buffer;

    return hashedSuppliedPassword.toString('hex') === hashedStoredPassword;
  }
}

export default PasswordUtil;
