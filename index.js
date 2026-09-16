const {onCall}=require("firebase-functions/v2/https");
const {onSchedule}=require("firebase-functions/v2/scheduler");
const {initializeApp}=require("firebase-admin/app");
const {getFirestore,FieldValue}=require("firebase-admin/firestore");
initializeApp();const db=getFirestore();
exports.resetOfficialStock=onSchedule("every day 00:00",async()=>{const b=db.batch();for(const id of ["water","penlight"])b.update(db.doc(`items/${id}`),{stock:15});await b.commit()});
exports.adminAdjustMoney=onCall(async req=>{if(!req.auth)throw new Error("unauthenticated");const a=await db.doc(`users/${req.auth.uid}`).get();if(!a.exists||a.data().status!=="admin")throw new Error("permission-denied");const {uid,amount,reason=""}=req.data||{};if(!uid||!Number.isFinite(amount)||amount===0)throw new Error("invalid-argument");await db.runTransaction(async tx=>{tx.update(db.doc(`users/${uid}`),{balance:FieldValue.increment(Math.floor(amount))});tx.create(db.collection("adminLogs").doc(),{actorId:req.auth.uid,targetUid:uid,amount:Math.floor(amount),reason,createdAt:FieldValue.serverTimestamp()})});return{ok:true}});