import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipe/validation.pipe";

async function start() {
  try {
    const PORT = process.env.PORT || 3030;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
      new ValidationPipe()
    );



    
    const config = new DocumentBuilder()
      .setTitle("Komron")
      .setDescription("maqtash shart emas bilaman zo'r chiqan")
      .setVersion("mirzo033") 
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    
    SwaggerModule.setup("api", app, document,  
     {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

    await app.listen(PORT, () => {
      console.log(`🚀 Server started at: http://localhost:${PORT}`);
      console.log(
        `📚 Swagger API documentation at: http://localhost:${PORT}/api`
      );
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
}

start();
