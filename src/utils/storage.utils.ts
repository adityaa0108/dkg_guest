/**
 * Storage Utilities - Local/Session Storage helpers
 */

/**
 * Storage class
 */
class Storage {
  private storage: globalThis.Storage

  constructor(storageType: 'local' | 'session' = 'local') {
    this.storage =
      storageType === 'local'
        ? typeof window !== 'undefined'
          ? window.localStorage
          : ({} as globalThis.Storage)
        : typeof window !== 'undefined'
        ? window.sessionStorage
        : ({} as globalThis.Storage)
  }

  /**
   * Get item from storage
   */
  get<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  }

  /**
   * Set item in storage
   */
  set<T>(key: string, value: T): void {
    try {
      this.storage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to storage:', error)
    }
  }

  /**
   * Remove item from storage
   */
  remove(key: string): void {
    this.storage.removeItem(key)
  }

  /**
   * Clear all items from storage
   */
  clear(): void {
    this.storage.clear()
  }

  /**
   * Check if key exists
   */
  has(key: string): boolean {
    return this.storage.getItem(key) !== null
  }
}

export const localStorage = new Storage('local')
export const sessionStorage = new Storage('session')
