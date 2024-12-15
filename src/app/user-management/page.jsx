"use client";

console.log = () => {};
console.error = () => {};
console.warn = () => {};

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { TableUser } from "@/components/TableUser";
import { ButtonAddUser } from "@/components/Buttons";
import { TextTypeUser, TitlePage } from "@/components/Texts";
import { ModalRegisterUser } from "@/components/ModalRegisterUser";
import withAuth from "@/components/AuthFunction";
import { getAllClients, getUsersByType } from "@/service/userManagementService";

const UserManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [users, setUsers] = useState([
    {
      image : "https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg",
      name: "Isabela",
      phone: "(11) 98365-9874",
      email: "isabela@gmail.com"
    },
    {
      image : "https://static.vecteezy.com/ti/fotos-gratis/t2/23331624-ai-generativo-uma-homem-em-solido-cor-fundo-com-uma-sorrir-facial-expressao-foto.jpg ",
      name: "Gabriel",
      phone: "(11) 95842-3658",
      email: "gabriel@gmail.com"
    },
    {
      image : "https://static.vecteezy.com/ti/fotos-gratis/p1/23309450-ai-generativo-uma-homem-em-solido-cor-fundo-com-uma-sorrir-facial-expressao-foto.jpg",
      name: "Marcos",
      phone: "(11) 96325-8741",
      email: "marcos@gmail.com"
    },
    {
      image : "https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp",
      name: "Rogério",
      phone: "(11) 98365-9999",
      email: "rogerio@gmail.com"
    },
  ]); 

  
  const [selectedType, setSelectedType] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // const fetchUsers = async (type = null) => {
  //   setIsLoading(true);
  //   try {
  //     let fetchedUsers;
  //     if (type === null) {
  //       fetchedUsers = await getAllClients(); // Sempre carregar todos os clientes como padrão
  //     } else {
  //       fetchedUsers = await getUsersByType(type);
  //     }
  //     setUsers(fetchedUsers);
  //   } catch (error) {
  //     console.error("Erro ao buscar usuários:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // Busca todos os clientes ao carregar a página ou quando selectedType mudar
  //   if (selectedType === null || selectedType === 3) {
  //     fetchUsers(null); // Carrega todos os clientes por padrão
  //   } else {
  //     fetchUsers(selectedType); // Busca usuários por tipo
  //   }
  // }, [selectedType]);
  

  return (
    <div className="w-screen h-screen bg-[#f1f1f1]">
      <Header />

      <main className="flex flex-col items-center mt-10 bg-[#f1f1f1] px-4 md:px-0">
        {/* Container principal */}
        <div className="w-full md:w-[75%] bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <TitlePage>Gerenciamento de Usuários</TitlePage>
            <ButtonAddUser onClick={openModal} />
          </div>
        </div>

        {/* Botões de filtro */}
        <div className="w-full md:w-[75%] bg-white rounded-lg shadow-lg p-6 mt-4 flex flex-col md:flex-row justify-between items-center md:items-center mb-4 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row w-full justify-around gap-4 md:gap-0">
            <button
              className="flex items-center gap-2 text-[#142937]/80 hover:text-[#03558c]"
              onClick={() => setSelectedType(0)}
            >
              <FaUserShield size={20} />
              <TextTypeUser>Administradores</TextTypeUser>
            </button>
            
            <div className="border-l border-gray-300 h-6 mx-4 hidden md:block" />

            <button
              className="flex items-center gap-2 text-[#142937]/80 hover:text-[#03558c]"
              onClick={() => setSelectedType(1)}
            >
              <FaUser size={16} />
              <TextTypeUser>Atendentes</TextTypeUser>
            </button>

            <div className="border-l border-gray-300 h-6 mx-4 hidden md:block" />

            <button
              className="flex items-center gap-2 text-[#142937]/80 hover:text-[#03558c]"
              onClick={() => setSelectedType(2)}
            >
              <FaUserCog size={20} />
              <TextTypeUser>Técnicos</TextTypeUser>
            </button>

            <div className="border-l border-gray-300 h-6 mx-4 hidden md:block" />

            <button
              className="flex items-center gap-2 text-[#142937]/80 hover:text-[#03558c] xl:mr-6"
              onClick={() => setSelectedType(3)}
            >
              <FaUserTie size={17} />
              <TextTypeUser>Clientes</TextTypeUser>
            </button>
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="w-full md:w-[75%] bg-white rounded-lg shadow-lg p-2 mb-6 overflow-x-auto">
          {isLoading ? (
            <p className="text-center text-gray-600">Carregando usuários...</p>
          ) : users.length > 0 ? (
            <TableUser users={users} />
          ) : (
            <p className="text-center text-gray-600">Nenhum usuário encontrado.</p>
          )}
        </div>
      </main>

      <ModalRegisterUser isOpen={isOpen} onClose={closeModal} />

    </div>
  );
};

export default UserManagement;
