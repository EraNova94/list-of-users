import React from "react";

const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/media/success1.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        className="send-invite-btn"
        onClick={() => window.location.reload()}>
        Назад
      </button>
    </div>
  );
};

export default Success;
