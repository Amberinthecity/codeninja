using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmberInTheCityGofW
{
    class Program
    {
        static void Main()
        {
            string player1Name = GetPlayerName("1");
            string player2Name = GetPlayerName("2");

            PrintPlayerName(player1Name, "1");
            PrintPlayerName(player2Name, "2");

            Pause();
        }

        private static void Pause()
        {
            Console.WriteLine("Press any key to continue . . .");
            Console.ReadKey(true);
        }

        static string GetPlayerName(string playerPrompt)
        {
            Console.WriteLine("Player " + playerPrompt + ", enter your name.");
            string nameEntered = Console.ReadLine();

            return nameEntered;

        }

        static void PrintPlayerName(string nameToPrint, string playerPrompt)
        {
            Console.WriteLine("Player " + playerPrompt + "'s name is " + nameToPrint);

        }


    }
}
