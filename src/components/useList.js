export default function useList() {
  class Prueba {
    constructor() {}
    fibonacci(n) {
      if (n == null) {
        return 0;
      } else {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
          fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib[n];
      }
    }
    triangular(n) {
      if (n == null) {
        return 0;
      } else {
        let res = (n * (n + 1)) / 2;
        return res;
      }
    }

    primo(n) {
      if (n == null) {
        return 0;
      } else {
        let numeroPrimo = n;
        let esNumeroPrimo = 1;
        for (let i = 2; i < numeroPrimo / 2; i++) {
          if (numeroPrimo % i === 0) {
            esNumeroPrimo = 0;
          }
        }
        return esNumeroPrimo;
      }
    }
    serie(n) {
      if (n == null) {
        return 0;
      } else {
        let res =
          (3 * this.primo(n) + this.triangular(n - 1)) /
          (2 * this.fibonacci(n + 2));
        return res;
      }
    }
  }

  return {
    Prueba,
  };
}
