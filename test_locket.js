/**
 * File giả lập môi trường Shadowrocket để test logic Locket_Gold.js ngay trên máy tính
 * Chạy bằng lệnh: node test_locket.js
 */
const fs = require('fs');
const path = require('path');

global.$request = {
  headers: {
    "User-Agent": "Locket/1.144.0 (iPhone; iOS 17.5.1)"
  }
};

global.$response = {
  body: JSON.stringify({
    subscriber: {
      entitlements: {},
      subscriptions: {}
    }
  })
};

global.$done = function(output) {
  console.log('\n================== KẾT QUẢ TEST LOGIC ==================');
  try {
    const data = JSON.parse(output.body);
    console.log('Thông điệp:', data.Attention);
    console.log('\nEntitlements:', JSON.stringify(data.subscriber.entitlements, null, 2));
    console.log('\nSubscriptions:', JSON.stringify(data.subscriber.subscriptions, null, 2));
    console.log('\n✅ TEST THÀNH CÔNG: Script chạy chuẩn xác!');
  } catch (err) {
    console.error('❌ LỖI:', err);
  }
  console.log('========================================================\n');
};

const scriptCode = fs.readFileSync(path.join(__dirname, 'js', 'Locket_Gold.js'), 'utf8');
eval(scriptCode);
