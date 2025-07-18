function saveImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const text = document.getElementById('text-input').value;

  // 選択された背景オプションを取得
  const transparentBgRadio = document.getElementById('transparent-bg');
  const whiteBgRadio = document.getElementById('white-bg');
  let backgroundColor = 'transparent'; // デフォルトは背景透過

  if (whiteBgRadio.checked) {
    backgroundColor = 'white';
  }

  // 背景の描画
  if (backgroundColor === 'white') {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    // 背景透過のまま初期化
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // グラデーションの作成（横方向）
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.17, "orange");
  gradient.addColorStop(0.34, "yellow");
  gradient.addColorStop(0.51, "green");
  gradient.addColorStop(0.68, "blue");
  gradient.addColorStop(0.85, "indigo");
  gradient.addColorStop(1, "violet");

  // フォント設定（好きなフォント名に変更OK）
  ctx.font = "bold 100px sans-serif"; // この行は下の行で上書きされるため実質的に不要ですが、念のため残しました。
  ctx.fillStyle = gradient;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // テキスト描画（中央）
  ctx.font = "bold 100px 'Hiragino Mincho ProN', 'MS 明朝', serif";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // PNGとして保存
  const link = document.createElement('a');
  link.download = 'rainbow-text.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
