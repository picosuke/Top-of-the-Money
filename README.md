# Top of the Money

GitHub Pages + Firebase版のTop of the Moneyポータルです。

## 構成
- index.html
- style.css
- script.js
- firebase-config.js
- firestore.rules
- storage.rules
- Goods/（公式グッズ画像）
- images/（その他の画像）

## Firebase
1. AuthenticationでAnonymousを有効化（後でメール/Google等に変更可能）。
2. Firestoreを作成。
3. Storageを作成。
4. Webアプリを登録し、firebase-config.jsへ設定値を入れる。
5. Firestore/Storage Rulesを反映。
6. Firestoreのitemsにwaterとpenlightを登録。
7. fcCodesに管理者が入会コードを登録。

重要：$s残高・管理者権限・決済等の本番処理は、最終的にはCloud Functions等のサーバー側処理へ移してください。ブラウザJSだけを信用しない設計にします。

公式画像はGitHubのGoods、ユーザー出品画像はFirebase Storageです。
