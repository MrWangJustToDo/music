// 开启开发服务器和node服务器
const { exec, spawn } = require('child_process');
const { freePort } = require('./free-port');

Promise.all([freePort('20201'), freePort('3000')]).then(() => {
  const clientProcess = spawn('yarn run serve', {
    stdio: 'inherit',
    shell: true,
  });

  exec('yarn run netease_api:run', (error, staout) => {
    console.log(staout);
  });

  const killChild = () => {
    clientProcess && clientProcess.kill();
    // serverProcess && serverProcess.kill();
  };

  process.on('close', code => {
    console.log('main process close', code);
    killChild();
  });

  process.on('exit', code => {
    console.log('main process exit', code);
    killChild();
  });
});
