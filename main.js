const { app, BrowserWindow, Menu, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  // Use absolute path for your icon file
  const iconPath = path.join('C:', 'Users', 'swathi', 'Downloads', 'favicon(1).ico');
  const icon = nativeImage.createFromPath(iconPath);

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    show: false,
    backgroundColor: '#f2f2f2',
    icon: icon,
    title: 'Word Processor Pro',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      // preload: path.join(__dirname, 'preload.js') // Uncomment this if you have preload.js
    }
  });

  // Load local index.html - Replace with your actual project folder path
  win.loadFile('E:/vat word/index.html');

  win.once('ready-to-show', () => {
    win.show();
  });

  // Set a basic menu if needed (optional)
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { label: 'Exit', role: 'quit' }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
