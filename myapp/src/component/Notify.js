import { useState } from "react";

const NotificationBell = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    "Bạn có một tin nhắn mới",
    "Cập nhật hệ thống đã hoàn tất",
    "Lịch trình sự kiện sắp tới",
  ];

  return (
    <div className="fixed top-4 right-4 z-[1000]">
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="p-2 text-black rounded-full"
        >
          🔔
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-black">
              {notifications.length}
            </span>
          )}
        </button>

        {showNotifications && (
          <div className="fixed top-14 right-4 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-[1000]">
            <div className="p-4">
              <h4 className="text-lg font-semibold text-black">Thông báo</h4>
              <ul className="mt-2 space-y-2">
                {notifications.length > 0 ? (
                  notifications.map((noti, index) => (
                    <li
                      key={index}
                      className="p-2 border-b last:border-none text-black"
                    >
                      {noti}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-black">Không có thông báo nào</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationBell;
