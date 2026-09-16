# Top of the Money — Evolved

ユーザーが送ってくれた現行Premium版を土台にした改良版です。

## タブ
ホーム → ニュース → ライブ → メンバー → ショップ → マーケット → FX → ドルズ

## 主な追加
- MARKET LIVEはトグルではなく、右端の▼/▲で展開・収納
- ユーザーマーケット
- 自由価格で出品
- 画像アップロード（Firebase Storage）
- ハッシュタグ・検索
- 取引コード発行
- アカウントで取引コード照合
- トプマネ税7%＋送料2%
- アカウント／管理UI
- Firebase Authentication / Firestore / Storageの土台
- 毎日15個の公式グッズ在庫リセット用Functions
- 管理者$s調整用Functions土台
- 既存の推し部屋・相場・FX UIを維持して強化

## Firebase
firebase-config.jsにWebアプリ設定を入れてください。
Authenticationはメール/パスワードを有効化。
Firestore / Storage Rulesを反映。
本番では$s増減・FX・FC会費・マーケット決済など重要処理をCloud Functions側へ移してください。
