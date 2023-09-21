import jwtDecode, { JwtPayload } from 'jwt-decode';

export function getSub(token: string): string | undefined {
  return getDecodeToken(token)?.sub;
}

export function getExpiryTime(token: string): number | undefined {
  return getDecodeToken(token).exp;
}

export function isTokenExpired(token: string): boolean {
  const expiryTime = getExpiryTime(token);
  if (expiryTime) {
    return 1000 * expiryTime - new Date().getTime() < 5000;
  } else {
    return false;
  }
}

function getDecodeToken(token: string): JwtPayload {
  return jwtDecode<JwtPayload>(token);
}
