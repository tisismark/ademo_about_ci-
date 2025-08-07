import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should initialize counter with default value', () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0));
    result.current.increment();
    expect(result.current.count).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(1));
    result.current.decrement();
    expect(result.current.count).toBe(0);
  });

  it('should reset counter', () => {
    const { result } = renderHook(() => useCounter(5));
    result.current.reset();
    expect(result.current.count).toBe(5);
  });
});