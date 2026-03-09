function getHash(): string {
  return window.location.hash.slice(1);
}

function setHash(hash: string): void {
  const newHash = hash ? `#${hash}` : '';
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }
}

export class HashRouterParam {
  private paramName: string;

  constructor(paramName: string) {
    this.paramName = paramName;
  }

  getValue(): string | null {
    const hash = getHash();
    if (!hash) return null;

    const params = new URLSearchParams(hash);
    return params.get(this.paramName);
  }

  setValue(value: string): void {
    const hash = getHash();
    const params = new URLSearchParams(hash);
    
    params.set(this.paramName, value);
    setHash(params.toString());
  }

  onChange(callback: (value: string | null) => void): () => void {
    const handler = () => callback(this.getValue());
    window.addEventListener('hashchange', handler);
    
    return () => window.removeEventListener('hashchange', handler);
  }

  getNumericValue(): number {
    const value = this.getValue();
    const num = value ? parseInt(value, 10) : 0;
    return isNaN(num) ? 0 : num;
  }

  setNumericValue(value: number): void {
    this.setValue(value.toString());
  }
}
