export function shutDown(message: string = 'STOP SERVER'): void {
  console.log('Shutdown Server After Received signal -', message)
  process.exit(0)
}
