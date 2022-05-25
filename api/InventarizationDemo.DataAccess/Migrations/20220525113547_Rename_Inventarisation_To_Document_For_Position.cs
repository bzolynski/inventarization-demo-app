using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventarizationDemo.Persistence.Migrations
{
    public partial class Rename_Inventarisation_To_Document_For_Position : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_InventarizationId",
                table: "InventarizationPositions");

            migrationBuilder.RenameColumn(
                name: "InventarizationId",
                table: "InventarizationPositions",
                newName: "DocumentId");

            migrationBuilder.RenameIndex(
                name: "IX_InventarizationPositions_InventarizationId",
                table: "InventarizationPositions",
                newName: "IX_InventarizationPositions_DocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_DocumentId",
                table: "InventarizationPositions",
                column: "DocumentId",
                principalTable: "InventarizationDocuments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_DocumentId",
                table: "InventarizationPositions");

            migrationBuilder.RenameColumn(
                name: "DocumentId",
                table: "InventarizationPositions",
                newName: "InventarizationId");

            migrationBuilder.RenameIndex(
                name: "IX_InventarizationPositions_DocumentId",
                table: "InventarizationPositions",
                newName: "IX_InventarizationPositions_InventarizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_InventarizationId",
                table: "InventarizationPositions",
                column: "InventarizationId",
                principalTable: "InventarizationDocuments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
