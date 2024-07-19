import { UserConfig } from '@farmfe/core'

function defineConfig(config: UserConfig): UserConfig {
  return config
}

export default defineConfig({
  compilation: {
    input: {
      button: './button.html' // Home Page
    },
    output: {
      path: 'build',
      publicPath: '/',
      targetEnv: 'browser'
    }
  },
  plugins: []
})
