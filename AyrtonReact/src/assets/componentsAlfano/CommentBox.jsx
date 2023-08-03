import React, { useState } from 'react';

const CommentBox = () => {
  // Estado para almacenar los comentarios y sus respuestas
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Función para manejar el envío de nuevos comentarios
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, { id: Date.now(), text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  // Función para manejar el envío de respuestas a un comentario
  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    const replyText = e.target.reply.value;
    if (replyText.trim() !== '') {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, { id: Date.now(), text: replyText }] };
        }
        return comment;
      });
      setComments(updatedComments);
      e.target.reset();
    }
  };

  return (
    <div className="bg-white p-4 w-3/4 h-full mx-auto rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
      {/* Sección para mostrar los comentarios */}
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <p className="font-bold">{comment.text}</p>
          {/* Sección para mostrar las respuestas a este comentario */}
          <div className="ml-4 mt-2">
            {comment.replies.map((reply) => (
              <p key={reply.id}>{reply.text}</p>
            ))}
          </div>
          {/* Formulario para agregar una respuesta */}
          <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="ml-4 mt-2">
            <input
              type="text"
              name="reply"
              placeholder="Escribe una respuesta..."
              className="border rounded px-2 py-1"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
              Responder
            </button>
          </form>
        </div>
      ))}
      {/* Formulario para agregar un nuevo comentario */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          className="border rounded px-2 py-1 mt-4"
        />
        <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded mt-2">
          Enviar Comentario
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
