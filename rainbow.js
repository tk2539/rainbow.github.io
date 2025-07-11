function saveImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const text = document.getElementById('text-input').value;

  // 背景透過のまま初期化
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
  ctx.font = "bold 100px sans-serif";
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